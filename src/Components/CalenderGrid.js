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
    }

    render () {
        const restOfCalender = this.props.calenderArray.map( (week, index) =>
            <CalenderWeek
                key={index}
                weekArray={ week }
                weekNumber={ index }
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