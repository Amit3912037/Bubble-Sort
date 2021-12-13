import React from 'react';
import './Bar.css';

const Bar = (props) => {

    return (
        <div className="bar" style={{ height: `${props.element.height}px`, backgroundColor: props.element.bgColor }}>
            <p className='bar_value'>{props.element.value}</p>
        </div>
    )
}

export default Bar;