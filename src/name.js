import React from 'react' ;

class Name extends React.Component
{ 
    render()
    { var x =30, y=20;
        return( <React.Fragment><h1> i am from Name Component</h1>
        <h2>solving expression</h2>
        <h3> {x} {"<"}{y} {":"} {x>y? 'x is big' : 'y is small'} </h3></React.Fragment>)
    }
}
export default Name;
