/**
 * Created by Jack on 09/09/2017.
 */
import React, { Component } from 'react';
import style from '../style';
import CalenderGridHeaders from './CalenderGridHeaders'
import CalenderWeek from './CalenderWeek'



class CalenderGrid extends Component {
    constructor(props) {
        super(props);
        this.state = { calenderArray: [] };
        this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.calArray = [];
        this.createDays = this.createDays.bind(this);
        this.weekCount = this.weekCount.bind(this);
        this.getFirstDayOfMonth = this.getFirstDayOfMonth.bind(this);
        this.getDaysInMonth = this.getDaysInMonth.bind(this);
        const d = new Date();
        this.year = d.getUTCFullYear();
        this.month = d.getUTCMonth();
    }

    weekCount(year, month) {
        // month_number is in the range 1..12
        const firstOfMonth = new Date(year, month-1, 1);
        getFirstDayOfMonth(firstOfMonth);
        const lastOfMonth = new Date(year, month, 0);

        const used = firstOfMonth.getDay() + lastOfMonth.getDate();

        const weeksInMonth = Math.ceil( used / 7);
        for (let i = 0; i < weeksInMonth; i++) {
            let newWeek = [];
            newWeek.length = 7;
            this.calArray.push(newWeek)
        }
        this.setState({calenderArray: this.calArray})
    }

    getFirstDayOfMonth(year, month) {
        return new Date(year + "-" + month + "-01").getDay();
    }

    getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

    createCalenderArray () {

    }
    loadNextMonth () {

    }
    render () {
        const restOfCalender = this.state.calenderArray.map( (week, index) =>
            <CalenderWeek
                weekArray={ week }
                isFirstWeek={ isFirstWeek }
                weekNumber={ index }
                firstDayOfMonth={ this.getFirstDayOfMonth(this.year, this.month) }
                daysInMonth={ this.getDaysInMonth(this.year, this.month) }
            />
        );
        return (
            <div>
                <table>
                    <CalenderGridHeaders days = {this.days} />
                    { restOfCalender }
                </table>
            </div>
        )
    }
}

export default CalenderGrid