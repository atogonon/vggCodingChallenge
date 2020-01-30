For this coding challenge, I used Create-React-App to set up the boilerplate code so that I could get something off the ground quickly and build out the page from there.  I also used Semantic-UI-React for the button and drop down menu styles, so the dependencies for that must be installed before running the code.  To start the app, just enter 'npm start' and it can be viewed in the browser at localhost:3000.

Part 1:
The main component can be found in src/App.js and is a class component with the city filter on state. For the basic layout, I started with a basic navigation bar which states what search the user just ran.  Next to that, I implemented a dropdown menu for the city filter (more on that in part 2).  The javascript object containing all of the event data was saved to its own separate file named eventList.js.  I imported that object into App.js and then assigned the array of event objects on the 'Items' key to a new variable named 'events', which can be seen in the render function of App.  I then mapped through all of the items in the array to render the SingleEvent component for each event.  This component is saved in src/SingleEvent.js.  For each SingleEvent component rendered, I passed in a single item in the events array as the 'event' property.  I then used all of the event info from that property to build out the SingleEvent component.  When designing the layout I tried to mimic the search layout currently found on viagogo.com, with some adjustments.  All of the basic information is included such as venue name, city, state, country, date, time, and tickets button.  I found that the information tags (for fast selling events, last date in the city, cheapest tickets) in the data object mainly contained boolean values, so to implement them I used ternary operators in order to render the tag depending on if the value was true or false.  As given to me, none of the events in the list were sold out, but you can test the 'sold out' tag by going into the eventList.js file and switching the IsSoldOut property to true.  For the remaining tickets tag, I wanted to only display the number of tickets remaining if the number was considered low, but I wasn't sure what the threshhold was in order to consider a ticket stock to be low.  Therefore, I just listed the remaining available tickets for informational purposes.  If given a threshold though, I would probably implement it using another ternary operator and evaluate whether the remaining available tickets is below a given value or not.

Part 2:
In order to implement the filter, I decided to go with a dropdown menu component in order to select a city.  As mentioned above, this can be found in the navigation bar.  In order to populate this dropdown menu properly, I created a some utility functions that can be found in src/utils.js.  First, I needed to take the events array and loop through it to add each venue city as a key in a new object with a value of one(1).  If the venue city is found again later in the array, it instead increments the city's value by 1.  This ensures that the number of events in a given city is kept track of and that no city duplicates will populate the dropdown menu.  All of this is done in the getCityObj function.  We then need to take that object and return an array that requires a specific format in order for the dropdown menu to work.  This is done in the setDropDownOptions function.  The resulting array is then needed for the 'options' property of the dropdown menu.  Now that the dropdown menu is properly populated, the actual filter itself needs to be implemented.  To do this, I created a handleChange function that changes the value of 'filter' on the App component's state based on the selection of the dropdown menu.  The render function then filters the events array (via the .filter array method) depending on the value of 'filter' on state.

Part 3:
I imagine one reason a customer may not like the current filter is if said customer wants to search cities not on the list.  Maybe the implementation of a manual search filter may work here.  Also, people may want more options to filter by other than just city.  Perhaps they want to filter by date, or by one of the information tags (fast selling, last date, cheapest in city).  This would probably require altering the state in the App component and the .filter method in the render function to take these tags into account.


==========================================================================================================================================


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
