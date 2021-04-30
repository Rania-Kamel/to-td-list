import React, { Component } from 'react';

class Additems extends Component {
    state = {
        name: "",
        age: ''
    };
    handelchange = (e) => {
        this.setState({

            [e.target.id]: e.target.value
        })

    }
    handelsubmit = (e) => {
        e.preventDefault();
        this.props.Additem(this.state)
        this.setState({
            name: '',
            age: ''
        })
    }
    render() {
        return ( <
            div className = "three" >
            <
            form onSubmit = { this.handelsubmit } >
            <
            input type = "text"
            autoFocus = "on"
            autoComplete = "off"
            placeholder = "Enter name ...."
            id = "name"
            onChange = { this.handelchange }
            value = { this.state.name }
            /> <
            input type = "number"
            placeholder = "Enter age ...."
            id = "age"
            onChange = { this.handelchange }
            value = { this.state.age }
            /> <
            input type = "submit"
            value = "Add Item" / >
            <
            /form> <
            /div>

        )

    }
}
export default Additems;