import React, {Component } from 'react';
import ToDo from './ToDo'

export default function List(props)  {
    //returning task prop from parent component inside a p tag
    //task was set to the value of {element} in the map function on parent 
    let list=props.tasks.map((element,index)=> {return(
        <ToDo key={index} task={element}/>
    )
}
    )
    return(
        <div>
            {list}
        </div>
)
}