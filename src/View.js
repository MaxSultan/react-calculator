import React from 'react';

class View extends React.Component{
    state = { 
        display: '',
        sum: 0,
    }

    render(props){
        const { display } = this.props
        return(
            <div className='view'>{display} </div>
        )
    }
}

export default View