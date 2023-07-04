import React from 'react';
class ChildComponent extends React.Component {

    //Rerender
    state = {
        showJobs: false
    }

    handlesShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
            // Dùng dấu chấm than để phủ định ý nghĩa cho nó ở đây showJobs === false thì là đúng ý nghĩa
        })
    }
    render() {

        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs : false';
        console.log('Check conditional: ', check);
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handlesShowHide()}>Show</button>
                    </div>
                    :
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
                        <div><button onClick={() => this.handlesShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     let { arrJobs } = props;
//     return (
//         <>
//             <div className='job-lists'>
//                 {
//                     arrJobs.map((item, index) => {
//                         if (+item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         }
//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default ChildComponent;