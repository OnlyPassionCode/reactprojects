import { Component } from "react";

class Test extends Component{
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}

export default Test;