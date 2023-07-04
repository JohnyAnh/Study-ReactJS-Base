import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {

    // obj: key : value
    state = {

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


    //Rerender
    render() {
        console.log('>>> call render:', this.state)
        return (
            <>
                <AddComponent />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />
                {/* props: property */}
            </>
        )
    }
}
export default MyComponent;