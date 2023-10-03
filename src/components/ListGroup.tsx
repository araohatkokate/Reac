import { Fragment, useState } from "react";

interface Props{
    items: string[];
    heading: string;
}

function ListGroup(props: Props) {
    const items = [
        'New York',
        'California',
        'Texas'
    ];


    //Hook - data that will change over time, this lets react know
    const [selectedIndex, setSelectedIndex] = useState(-1);
    
    
    
    
    //Event Handler
    return (
        <Fragment>
            <h1>List</h1>
            <ul className="list-group">
            {items.map((item, index) => (
            <li 
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item} 
            onClick = {() => {setSelectedIndex(index);}}
            >
            {item}
            </li>
            ))}
            </ul>
        </Fragment>
    );
}

export default ListGroup;