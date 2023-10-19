import React from 'react';
import './Calculator.css';
import Screen from '../Screen/Screen';
import CalcProvider from '../../Context/CalcContext';
import Buttons from '../Buttons/Buttons';

export default function Calculator() {
    const btnValues =[
        ["C", "+-", "%", "/"],
        [7, 8, 9, "x"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
    ];
  return (
    <CalcProvider>
        <div className='cal-container'>
            <div className='calculator'>
                <Screen />
                <div className='cal-con-map'>
                    {
                        btnValues.flat().map((btn, i) => (
                            <Buttons value={btn} key={i}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </CalcProvider>
  )
}
