/**
 * Created by Jack on 09/09/2017.
 */
import React, { Component } from 'react';
import style from '../style';


class CalenderDay extends Component {
    render () {
        const { dayNo } = this.props;
        return (
            <td style={{...style.borderStyle}}>
                <div>
                    <div className="dayNumber">{dayNo !== 0 ? dayNo : '' }</div>
                </div>
            </td>
        )
    }
}

export default CalenderDay