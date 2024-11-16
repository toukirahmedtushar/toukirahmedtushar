
import React from "react";

class Car4 extends React.Component{
    constructor(props){
        super(props);
        <h1>construc{props}</h1>
    }
    render(){
        return <h2>model name {this.props.model}</h2>;
    }
}




export default Car4;