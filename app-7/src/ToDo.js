import React, {Component } from 'react';

export default function ToDo(props)  {
    //returning task prop from parent component inside a p tag
    //task was set to the value of {element} in the map function on parent 
    return(
        <div>
            <p>{props.task}</p>
        </div>
)
}