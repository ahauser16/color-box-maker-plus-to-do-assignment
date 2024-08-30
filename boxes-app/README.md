# Color Box Maker

## Assignment Instructions

Create a new React application, which contains the following components:

### App

this component should render the `BoxList` component.

### BoxList

Place your state that contains all of the boxes here. This component should render all of the `Box` components along with the `NewBoxForm` component

### Box

this component should display a `div` with a background color, width and height based on the props passed to it.

### NewBoxForm

this component should render a form that when submitted, creates a new `Box`. You should be able to specify the `Box`’s width, height, and background color. When the form is submitted, clear the input values.

### NB --> 
When each `Box` component is displayed, add a button with the text of “X” next to each `Box`. When this button is clicked, remove that specific box. This will require you to pass a function down as `props` - the button **should not** be a separate component, it should be included in the `Box` component.

## Component Hierarchy

```mermaid
erDiagram
    App ||--|| BoxList : renders
    BoxList ||--|{ Box : passes_state_values_as_props_to
    BoxList ||--|| boxComponents : creates_and_renders
    boxComponents ||--|{ Box : contains_an_array_of
    BoxList ||--|| NewBoxForm : passes_state_values_as_props_to
    BoxList ||--|| NewBoxForm : renders
    Box ||--|| Div : renders
    Div ||--|| Button : contains
    Div ||--|| StyledDiv : contains
    Button
    NewBoxForm ||--|| FormWithBtn : renders
    NewBoxForm ||--|| Box : creates
    FormWithBtn

    App {
        __prop_name__ __prop_value_type__
        *none *not_applicable
        __state_name__ __state_value_type__
        *none *not_applicable
    }

    BoxList {
        __prop_name__ __prop_value_type__ "prop instantiator (Parent) or received from [ ] / passed to [ ]"
        createBox function "Parent / passes add() function to NewBoxForm"
        handleRemove function "Parent / passes remove() function to Box"
        __state_name__ __state_value_type__ "state instantiator (Parent) or received from [ ] / passed to [ ]"
        boxes array "Parent / passes individual pieces of state to Box components"
        __function_name__ __function_arguments__ "__function_purpose__" 
        add boxObj "updates boxes state variable by adding a block" 
        remove id "updates boxes state variable by removing a block" 
    }

    boxComponents {

    }

    Box {
        __prop_name__ __prop_value_type__ "prop instantiator (Parent) or received from [ ] / passed to [ ]"
        key int "received from BoxList"
        id int "received from BoxList"
        width int "received from BoxList"
        height int "received from BoxList"
        backgroundColor text "received from BoxList"
        handleRemove function "received from BoxList"
        __state_name__ __state_value_type__
        *none *not_applicable
    }

    NewBoxForm {
        __prop_name__ __prop_value_type__ "prop instantiator (Parent) or received from [ ] / passed to [ ]"
        createBox function "received from BoxList"
        __state_name__ __state_value_type__ "state instantiator (Parent) or received from [ ] / passed to [ ]"
        formData object "Parent"
        formData_height int "Parent"
        formData_width int "Parent"
        formData_backgroundColor text "Parent"
        __attribute_name__ __attribute_value_type "__purpose__"
        handleChange function "updates the formData state whenever an input field changes"
        gatherInput function "runs when form is submitted and calls createBox with the current formData"
    }

    StyledDiv {
        __attribute_name__ __attribute_value_type
        backgroundColor text
        width int
        height int
    }

    FormWithBtn{
        __attribute_name__ __attribute_value_type
        height text
        width text
        backgroundColor text
    }

    Button{
        __attribute_name__ __attribute_value_type 
        onClick function
    }
```
## Component Sequencing

```mermaid
sequenceDiagram
    participant User
    participant "NewBoxForm"
    participant "BoxList"
    participant "Box"

    User->>"NewBoxForm": Fill out form fields
    "NewBoxForm"->>"NewBoxForm": handleChange (update formData state)
    User->>"NewBoxForm": Submit form
    "NewBoxForm"->>"NewBoxForm": gatherInput (prevent default, call createBox)
    "NewBoxForm"->>"BoxList": createBox({ ...formData, id: uuid() })
    "BoxList"->>"BoxList": add (update boxes state)
    "BoxList"->>"Box": Render new Box component
    "Box"->>User: Display new box
```

---
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

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
