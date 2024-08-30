# ToDo App - List, Add, Remove ToDos!

## Assignment Instructions

Create a Todo App that allows users to see, add, edit, and remove todos. It should contain the following components.

### App

this component should render the `TodoList` component

### TodoList

this component should render the `NewTodoForm` component and should render the list of Todo components. Place your state that contains all of the todos in this component.

### NewTodoForm

this component should render a form with one text input for the task to be created. When this form is submitted, a new `Todo` component should be created. 

### Todo

this component should display a `div` with the task of the todo.

For each `Todo` component, there should also be a `button` with the text “X” that when clicked, removes the todo.

## Component Hierarchy

```mermaid
erDiagram
    App ||--|| TodoList : renders
    TodoList ||--|| NewTodoForm : renders
    TodoList ||--|| todoComponents : renders
    todoComponents ||--|{ Todo : contains_an_array_of
    NewTodoForm ||--|| FormWithBtn : renders
    Todo ||--|| task_editBtn_deleteBtn : renders
    

    App {
        __prop_name__ __prop_value_type__
        *none *not_applicable
        __state_name__ __state_value_type__
        *none *not_applicable
    }

    TodoList {
        __state_name__ __state_value_type__ "state instantiator (Parent) or received from [ ] / passed to [ ]"
        todos array "Parent / passes add() function to NewBoxForm"
        setTodos function "Parent / passes remove() function to Box"
        __function_name__ __function_arguments__ "__function_purpose__" 
        create newTodo "adds a new todo item to the todos state by appending the newTodo object to the todos array" 
        update id_updatedTask "updates an existing todo item"
        remove id "deletes a todo item by its id by filtering out the todo item from the todos array"
        __prop_name__ __prop_value_type__ "prop instantiator (Parent) or received from [ ] / passed to [ ]"
        createTodo function "Parent / passes create() method to NewTodoForm component"
        removeTodo function "Parent / passes remove() method to Todo component"
        updateTodo function "Parent / passes update() method to Todo component"
    }

    todoComponents {

    }

    Todo {
        __state_name__ __state_value_type__ "state instantiator (Parent) or received from [ ] / passed to [ ]"
        editTask text "Parent"
        isEditing function "Parent"
        __prop_name__ __prop_value_type__ "prop instantiator (Parent) or received from [ ] / passed to [ ]"
        task text "received from TodoList"
        id text "received from TodoList"
        remove function "received from TodoList"
        update function "received from TodoList"
        __function_name__ __function_arguments__ "__function_purpose__"
        toggleEdit none "toggles the isEditing state between True and False"
        handleChange evt "updates the editTask state with the value from the input field"
        handleDelete none "calls the remove function accepting the id of the target item"
        handleUpdate none "calls the update function accepting the id and editTask of the target item AND sets isEditing to false" 
    }

    NewTodoForm {
        __prop_name__ __prop_value_type__ "prop instantiator (Parent) or received from [ ] / passed to [ ]"
        createTodo function "received from TodoList"
        __state_name__ __state_value_type__ "state instantiator (Parent) or received from [ ] / passed to [ ]"
        task text "Parent"
        setTask method "Parent"
        __function_name__ __function_arguments__ "__function_purpose__" 
        handleChange evt "updates the task state whenever an input field changes with the setTask method"
        gatherInput evt "calls the createTodo function with a new todo object containing the current task value and a unique id using the setTask method"
    }

    FormWithBtn{

    }

    task_editBtn_deleteBtn{

    }
```

## Component Sequencing

```mermaid
sequenceDiagram
    participant User
    participant TodoList
    participant NewTodoForm

    User->>NewTodoForm: Input task and submit form
    NewTodoForm->>NewTodoForm: handleChange(evt)
    NewTodoForm->>NewTodoForm: gatherInput(evt)
    NewTodoForm->>TodoList: createTodo({ task, id: uuid() })
    TodoList->>TodoList: create(newTodo)
    TodoList->>TodoList: setTodos([...todos, newTodo])
    TodoList->>TodoList: todos state updated
    TodoList->>User: New Todo created and displayed
```


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
