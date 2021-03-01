
import React, { useState, useEffect } from 'react';

const FunctionCounter = ({name}) => {

    // {name} <- const name = props.name
    //useState()
    // count = 0 ( this.state in constructor)
    // count : this.state.count

    useEffect( () => {
        //componentDidMount()
       console.log('functional com mounted...')
       //componentWillUnmount()
       return () => {
           console.log('removedddd....')
       }
    }, []);

    const [count, setCount] = useState(0);

    return (
        <div>
            {`My name is ${name}`}
            <br/>
            Count: {count}
            <br/>
            <button onClick={() => setCount(count + 1) }>
                Click me
            </button>
        </div>
    )
}

export default FunctionCounter