import React from 'react';

class MyComponent extends React.Component {

    // obj: key : value
    state = {
        firstName: '',
        lastName: ''
    }
    /**
     * JSX => return block code
     * fragment
     */
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault() //preventDefault ngăn chặn load lại trang
        console.log('Check state:', this.state)
    }

    //Rerender
    render() {
        console.log('>>> call render:', this.state)
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        defaultValue={this.state.firstName}
                        onChange={(event) => { this.handleChangeFirstName(event) }}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        defaultValue={this.state.lastName}
                        onChange={(event) => {
                            this.handleChangeLastName(event)
                        }}
                    />
                    <br /><br />
                    <input type="submit" defaultValue="Submit"
                        onClick={(event) => { this.handleSubmit(event) }}
                    />
                </form>
            </>
        )
    }
}
export default MyComponent;