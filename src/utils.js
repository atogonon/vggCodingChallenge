const getCityObj = (events) => {
  let cityObj = {}

  events.forEach(event => {
    let city = event.VenueCity
    if (event.VenueCity in cityObj) {
      cityObj[city] += 1
    }
    else {
      cityObj[city] = 1
    }
  })

  return cityObj
}

const setDropDownOptions = (cityObj) => {

  let cityArray = [{
    key: "All",
    value: null,
    text: `All`
  }]

  for (let city in cityObj) {
    cityArray.push({
      key: city,
      value: city,
      text: `${city} (${cityObj[city]})`
    })
  }

  return cityArray
}

const getCityArray = (events) => {
  let newObj = getCityObj(events)
  let newArr = setDropDownOptions(newObj)

  return newArr
}

export default getCityArray




