/**
 * Created by Jack on 09/09/2017.
 */
import React, { Component } from 'react';
import style from './style';
import CalenderGridHeaders from './CalenderGridHeaders'


class CalenderGrid extends Component {
    constructor(props) {
        super(props);
        this.state = { firstDayOfMonth: '', weeksInMonth: 0, daysInMonth: 0};
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
        this.setState({ weeksInMonth : weeksInMonth });
    }
    getFirstDayOfMonth(firstOfMonth) {
        const locale = "en-uk";
        const month = date.toLocaleString(locale, { month: "long" });
        this.setState({ firstDayOfMonth: month });
    }
    daysInMonth(month, year) {
        this.setState(Date(year, month, 0).getDate());
    }
    render () {
        return (
            <div>
                <table>
                    <CalenderGridHeaders days = {this.days} />
                    <tr>
                        <td>January</td>
                        <td>$100</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default CalenderGrid