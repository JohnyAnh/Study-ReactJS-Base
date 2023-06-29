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
        console.log('Check props:', this.props)
    }

    //Rerender
    render() {
        console.log('>>> call render:', this.state)
        // let name = this.props.name;
        // let age = this.props.age;
        // or
        //key:value
        let { name, age } = this.props;

        return (
            <>
                <div>ChildComponent : {name} - {age}</div>
            </>
        )
    }
}
export default ChildComponent;