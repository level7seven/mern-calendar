/**
 * Created by Jack on 16/09/2017.
 */
import React, { Component } from 'react';
import style from '../style';
import CalenderDay from './CalenderDay'

class CalenderWeek extends Component {
    constructor(props) {
        super(props);
        this.createFirstWeek = this.createFirstWeek.bind(this);
        this.createLastWeek = this.createLastWeek.bind(this);
        this.createFullWeek = this.createFullWeek.bind(this);
    }
    createFirstWeek() {
        return this.props.weekArray.map((day, index) => {
            if (day === this.props.firstDayOfMonth) {
                return (
                    <CalenderDay
                        weekNo = { this.props.weekNumber }
                        dayNo = { index }
                        firstDayOfMonth = {  this.props.firstDayOfMonth }
                    />
                )
            } else {
                return(
                    <div></div>
                )
            }
        });


    }

    createLastWeek() {
        return this.props.weekArray.map((day, index) => {
            if (!((this.props.weekNumber - 2 * 7) + this.props.firstDayOfMonth) + (index + 1) > this.props.daysInMonth){
                return (
                    <CalenderDay
                        weekNo = { this.props.weekNumber }
                        dayNo = { index }
                        firstDayOfMonth = {  this.props.firstDayOfMonth }
                    />
                )
            } else {
                <div></div>
            }
        });
    }
    createFullWeek() {
        return this.props.weekArray.map( (day, index) => {
            return (
                <CalenderDay
                    weekNo={ this.props.weekNumber }
                    dayNo={ index }
                    firstDayOfMonth={  this.props.firstDayOfMonth }
                />
            )
        });
    }
    render () {
        if (this.props.weekNumber === 0) {
            const week = this.createFirstWeek()
        }
        return (
            <tr>{ week }</tr>
        )
    }
}

export default CalenderWeek