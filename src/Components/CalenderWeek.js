/**
 * Created by Jack on 16/09/2017.
 */
import React, { Component } from 'react';
import style from '../style';
import CalenderDay from './CalenderDay'

class CalenderWeek extends Component {
    constructor(props) {
        super(props);
        this.createFullWeek = this.createFullWeek.bind(this);
    }

    createFullWeek() {
        return this.props.weekArray.map( (day, index) => {
            return (
                <CalenderDay
                    key={`${this.props.weekNumber}_${index}`}
                    dayNo={ day }
                />
            )
        });
    }
    render () {
        const week = this.createFullWeek();
        return (
            <tr>{ week }</tr>
        )
    }
}

export default CalenderWeek