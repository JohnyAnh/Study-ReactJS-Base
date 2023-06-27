import React from 'react';

class MyComponent extends React.Component {

    // obj: key : value
    state = {
        name: '',
        age: 26
    }
    /**
     * JSX => return block code
     * fragment
     */

    //Example
    handleOnchangeName = (event) => {
        // this.setState.name = event.target.value; bad code 
        //merge cú pháp thay thổi State
        this.setState({
            name: event.target.value
        })
    }

    // Cách khai báo event bằng Arrow function
    handleClickButton = () => {
        alert('click me')
    }

    //Rerander
    render() {
        console.log('>>> call render:', this.state)
        let name = 'Johny';
        return (
            <>
                <div className='first'>
                    {console.log('Hello my name is:', name)}
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnchangeName(event)} />
                    My name is {this.state.name}<br />
                    {/* Hello my component React JS. My name is {this.state['name']}<br /> */}

                </div>
                <div className='second'>
                    I'm {this.state.age} year old <br />
                    {/* I'm {this.state['age']} year old */}
                </div>
                {/* Cách khai báo event bằng Arrow function */}
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        )
    }
}
export default MyComponent;