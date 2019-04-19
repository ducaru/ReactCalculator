import React from 'react';
import './ClearButton.css';

const ClearButton = (props) => (
    <div className="clear" onClick={props.handleClear}>{props.text}</div>
)

export default ClearButton;