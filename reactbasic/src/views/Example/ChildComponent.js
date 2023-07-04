import React from 'react';
// class ChildComponent extends React.Component {

//     // obj: key : value
//     state = {
//         firstName: '',
//         lastName: ''
//     }
//     /**
//      * JSX => return block code
//      * fragment
//      */
//     handleChangeFirstName = (event) => {
//         this.setState({
//             firstName: event.target.value
//         })
//     }
//     handleChangeLastName = (event) => {
//         this.setState({
//             lastName: event.target.value
//         })
//     }
//     handleSubmit = (event) => {
//         event.preventDefault() //preventDefault ngăn chặn load lại trang
//         console.log('Check state:', this.state)
//     }

//     //Rerender
//     render() {
//         console.log('Check props:', this.props)
//         // let name = this.props.name;
//         // let age = this.props.age;
//         // or
//         //key:value
//         let { name, age, adress, arrJobs } = this.props;

//         return (
//             <>
//                 <div className='job-lists'>
//                     {
//                         arrJobs.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </>
//         )
//     }
// }

const ChildComponent = (props) => {
    let { arrJobs } = props;
    return (
        <>
            <div className='job-lists'>
                {
                    arrJobs.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {item.title} - {item.salary}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default ChildComponent;