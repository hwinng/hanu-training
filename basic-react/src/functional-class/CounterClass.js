import React, { Component } from 'react'

// React.Component
// { Component } = React <- Component = React.Component
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log('mounted');
    }

    componentWillUnmount() {
        console.log('removed...')
        
    }

    render() {
        //Count: 0 -> 1 -> 2
        // Click me 
        // const name = this.props.name
        const { name } = this.props;
        return (
            <div>
                {`My name is ${name}`}
                <br/>
                Count: {this.state.count}
                <br/>
                <button onClick={() => this.setState({count: this.state.count + 1}) }>
                    Click me
                </button>
            </div>
        )
    }
}

export default Counter;