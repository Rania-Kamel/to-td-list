import React, { Component } from 'react';
import Todoitems from './component/Todoitems/Todoitems';
import Additems from './component/Additem/Additems';

class App extends Component {
    state = {
        items: [
            { id: 1, name: "mariam", age: 21 },
            { id: 2, name: "rania", age: 19 },
            { id: 3, name: "mena", age: 17 },
            { id: 4, name: "thomas", age: 15 }
        ]
    };
    deletitem = (id) => {
        var items = this.state.items.filter((item) => {
            return (
                item.id !== id
            )
        })
        this.setState({ items })
    }
    Additem = (item) => {

        var { items } = this.state;
        items.push(item);
        this.setState({ items })
    }
    change = (id) => {
        const items = this.state.items;
        items.map((item) => {
            if (item.id === id) {
                return ( 
                    <div >
                    
                    <span className = "style"> { item.name } </span> 
                    </div>

                )
            }
            this.setState({ items })
        })

    }

    render() {
        return ( 
            <div className = "App contain" >
            
            <h1> Ranoosh </h1> 
            <h2> Todo List </h2> 
            <Todoitems items = { this.state.items }
            deletitem = { this.deletitem }
            change = { this.change }/>
            
            <Additems Additem = { this.Additem } /> 
           
            </div>
        );
    }
}


export default App;