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
        this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.weekCount = this.weekCount.bind(this);
        this.getFirstDayOfMonth = this.getFirstDayOfMonth.bind(this);
        this.getDaysInMonth = this.getDaysInMonth.bind(this);
        const d = new Date();
        this.year = d.getUTCFullYear();
        this.month = d.getUTCMonth() + 1;
        this.state = { calenderArray: this.weekCount(this.year, this.month) };
    }

    weekCount(year, month) {
        // month_number is in the range 1..12
        // const firstOfMonth = new Date(year, month, 1);
        let calArray = [];
        const firstOfDayOfMonth = this.getFirstDayOfMonth(year, month);
        const lastOfDayOfMonth = new Date(year, month, 0).getDate();

        const used = firstOfDayOfMonth + lastOfDayOfMonth;

        const weeksInMonth = Math.ceil( used / 7);
        let dayCount = 1;
        for (let i = 0; i < weeksInMonth; i++) {
            let newWeek = [];
            for (let j = 1; j <= 7; j++) {
               if (j === firstOfDayOfMonth) {
                   newWeek.push(dayCount);
                   dayCount++;
               } else if ((dayCount === 1 && j !== firstOfDayOfMonth) || (dayCount > lastOfDayOfMonth)) {
                   newWeek.push(0);
               } else {
                   newWeek.push(dayCount);
                   dayCount++
               }
            }
            calArray.push(newWeek)
        }
        return calArray;
    }

    getFirstDayOfMonth(year, month) {
        return new Date(year + "-" + month + "-01").getDay();
    }

    getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

    loadNextMonth () {

    }
    render () {
        const restOfCalender = this.state.calenderArray.map( (week, index) =>
            <CalenderWeek
                key={index}
                weekArray={ week }
                weekNumber={ index }
                firstDayOfMonth={ this.getFirstDayOfMonth(this.year, this.month) }
                daysInMonth={ this.getDaysInMonth(this.year, this.month) }
            />
        );
        return (
            <div>
                <table style = { style.calenderGrid }>
                    <thead>
                        <CalenderGridHeaders days = {this.days}/>
                    </thead>
                    <tbody>
                        { restOfCalender }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CalenderGrid