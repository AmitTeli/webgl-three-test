## Problem in unit testing webgl

Many a times we need to unit test webgl/threejs functionalities. 
There are many mocks availble, but with them actual functionalities cannot be tested.
e.g. Adding a mesh, transforming a geometric, changing color etc caanot be tested with mocks.


## Solution approach

To enable that, I have taken following approach.
1. Move all the **global variables** like **scene**, **renderer** and **camera** to *index.html*
2. Initialize them on loading of the page. e.g. in this reactjs example, they are initialized in *componentDidMount()* of the root component. Other functions can use this context. (You can check this by running **`yarn start`**)
3. While doing the unit testing, initialize them in *setupTest.js*. We will need additional dev dependencies of headless webgl - **gl** and **canvas**
4. With this setup now we can run the test in say *App.test.js* (You can check this by running **`yarn test`**)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Things to note in this sample project.

1. To setup the project : Checkout this project and run `yarn install`.
2. Check *<project_root>/public/index.html* and verify global variables **scene**, **renderer** and **camera** are declared.
3. Check *<project_root>/src/App.js*, you will find that *componentDidMount()* is overriden and it calls *start3JS*
4. Check *<project_root>/src/services/threeService.js*, you will find 2 methods defined. *start3JS()* initializes threejs **scene**, **renderer** and **camera**, *addACube* adds a cube in the **scene**
5. You can run the project with `yarn start` and check the output in the browser
6. About testing: Check *<project_root>/src/setupTests.js*, here you can see **scene**, **renderer** and **camera** are initialized and added to **global**, this will now serve as the global context. You can now find the code to test *addACube()* in *<project_root>/src/App.test.js*

I hope this is correct approach. Any feedback/suggestions/comments are welcome.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

