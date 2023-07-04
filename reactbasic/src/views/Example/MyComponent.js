import React from 'react';
import ChildComponent from './ChildComponent';
class MyComponent extends React.Component {

    // obj: key : value
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'sbcJob1', title: 'Developers', salary: '500' },
            { id: 'sbcJob2', title: 'Tester', salary: '400' },
            { id: 'sbcJob3', title: 'Project managers', salary: '1000' }
        ]
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
                <ChildComponent
                    name={this.state.firstName}
                    age={'25'}
                    adress={'Ha Noi'}
                    arrJobs={this.state.arrJobs}
                />
                {/* props: property */}
            </>
        )
    }
}
export default MyComponent;