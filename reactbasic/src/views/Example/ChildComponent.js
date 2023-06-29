import React from 'react';
class ChildComponent extends React.Component {

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
                <div>ChildComponent :{this.props.name}</div>
            </>
        )
    }
}
export default ChildComponent;