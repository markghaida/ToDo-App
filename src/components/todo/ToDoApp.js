import {Component} from 'react';

class ToDoApp extends Component{
    render(){
    return(
        <>
            My To Do Application
        </>
    )
}
}

class LoginComponent extends Component {
    render(){
        return(
        <>
            Username: <input type="text" name="username"/>
            Password: <input type='password' name="password"/> 
        </>
        )
    }
}
export default ToDoApp;