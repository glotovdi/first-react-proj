import React from 'react';

class HelloWorld extends React.Component {
    render() {
        return <h1>Hello from {this.props.phras1e}!</h1>;
    }
}

export default HelloWorld;