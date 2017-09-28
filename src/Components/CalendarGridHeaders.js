/**
 * Created by Jack on 09/09/2017.
 */
import React, { Component } from 'react';
import style from '../style';


class CalenderGridHeaders extends Component {
    render () {
        const headers = this.props.days.map(day => {
        return (
            <th style={{...style.calenderHeader, ...style.borderStyle}} key={day}>{ day }</th>
        )
    });
        return (
            <tr>
                { headers }
            </tr>
        )
    }
}

export default CalenderGridHeaders