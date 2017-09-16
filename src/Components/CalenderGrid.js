/**
 * Created by Jack on 09/09/2017.
 */
import React, { Component } from 'react';
import style from './style';
import CalenderGridHeaders from './CalenderGridHeaders'


class CalenderGrid extends Component {
    constructor(props) {
        super(props);
        this.state = { firstDayOfMonth: 0, weeksInMonth: 0, daysInMonth: 0, calenderArray: [] };
        this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.createDays = this.createDays.bind(this);
        this.weekCount = this.weekCount.bind(this);
        this.getFirstDayOfMonth = this.getFirstDayOfMonth.bind(this);

    }
    weekCount(year, month) {

        // month_number is in the range 1..12
        const firstOfMonth = new Date(year, month-1, 1);
        getFirstDayOfMonth(firstOfMonth);
        const lastOfMonth = new Date(year, month, 0);

        const used = firstOfMonth.getDay() + lastOfMonth.getDate();

        const weeksInMonth = Math.ceil( used / 7);
        const calenderArray = this.state.calenderArray
        for (let i = 0; i < weeksInMonth; i++) {
            this.state.calenderArray
        }
        this.setState({ weeksInMonth : weeksInMonth });
    }
    getFirstDayOfMonth(year, month) {
        var day = new Date(year + "-" + month + "-01").getDay()
        this.setState(firstDayOfMonth: day)
    }
    daysInMonth(month, year) {
        this.setState(Date(year, month, 0).getDate());
    }
    createCalenderArray () {
        let firstWeek = true;
        let dayCount = 0;
        for (let i = 0; i < this.state.weeksInMonth; i++) {
            for (let j = 0; j < 7; j++) {
                if (firstWeek) {
                    if (this.state.firstDayOfMonth === j ) {

                    }
                } else {

                }
                dayCount++
            }
        }

    }
    render () {

        return (
            <div>
                <table>
                    <CalenderGridHeaders days = {this.days} />
                    <tr>

                    </tr>
                </table>
            </div>
        )
    }
}

export default CalenderGrid