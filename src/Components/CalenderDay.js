/**
 * Created by Jack on 09/09/2017.
 */
import React, { Component } from 'react';
import style from '../style';


class CalenderDay extends Component {
    render () {
        return (
            <td>{this.props.dayNo}</td>
        )
    }
}

export default CalenderDay