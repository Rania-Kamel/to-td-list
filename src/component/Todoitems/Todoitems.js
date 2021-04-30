import React, { Component } from 'react';
import Additems from '../Additem/Additems';

class Todoitems extends Component {
    render() {
        const { items, deletitem, change } = this.props;
        const list = items.length ? (
            items.map((point) => {
                return ( <
                    div key = { point.id } >
                    <
                    span className = "name" > { point.name } < /span> <
                    span className = "age" > { point.age } < /span> <
                    span className = "action"
                    onClick = {
                        () => deletitem(point.id) } > * < /span> <
                    input type = "checkbox"
                    onClick = {
                        () => change(point.id) }
                    />

                    <
                    /div>
                )
            })) : ( <
            p > there is no items < /p> 
        )



        return ( <
            div className = "item" >
            <
            div >
            <
            span className = "name titel" > Name < /span> <
            span className = "age titel" > Age < /span> <
            span className = "action titel" > Action < /span> <
            /div> { list } <
            /div>

        )
    }
}
export default Todoitems;