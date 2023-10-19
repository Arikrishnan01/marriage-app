import React, { useContext } from 'react';
import { CalcContext } from '../../Context/CalcContext';
import './Buttons.css';

const getStyleName = btn => {
    const className = {
        '=': "equals",
        'x': "opt",
        '-': "opt",
        '+': "opt",
        '/': "opt",
    }
    return className[btn]
}
export default function Buttons({ value }) {

    
    const { calc, setCalc } = useContext(CalcContext);
    // User click ,
    const commaClick = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
        })
    }
    //User click C
    const resetClick = () => {
        setCalc({
            sign: "",
            num: 0,
            res: 0
        })
    }
    //User click numbers
    const handleClickButton = () => {
        const numberString = value.toString()

        let numberValue;
        if(numberString === '0' && calc.num === 0){
            numberValue = '0'
        }
        else{
            numberValue = Number(calc.num + numberString)
        }
        setCalc({
            ...calc,
            num: numberValue
        })
    }

    //User clicks sign
    const signClick = () => {
        setCalc({
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })
    }

    //User click =
    const equalsClick = () => {
        if(calc.res && calc.num){
            const math = (a, b, sign) =>{
                const result ={
                    "+": (a, b) => a + b,
                    "-": (a, b) => a - b,
                    "x": (a, b) => a * b,
                    "/": (a, b) => a / b,
                }
                return result[sign](a,b);
            }
            setCalc({
                res: math(calc.res, calc.num, calc.sign),
                sign: "",
                num: 0
            })
        }
    }

    //User click %
    const precentClick = () => {
        setCalc({
            num: (calc.num / 100),
            res: (calc.res / 100),
            sign: ""
        })
    }

    //User click +-
    const invertClick = () => {
        setCalc({
            num: calc.num ? calc.num * -1 : 0,
            res: calc.res ? calc.res * -1 : 0,
            sign: ''
        })
    }

    const handleBtnClick = () => {
        const result = {
            '.': commaClick,
            "C": resetClick,
            '/': signClick,
            'x': signClick,
            '-': signClick,
            '+': signClick,
            "=": equalsClick,
            "%": precentClick,
            "+-": invertClick
        }
        if(result[value]){
            return result[value]()
        }
        else{
            return handleClickButton()
        }
    }

  return (
        <div className={`${getStyleName(value) !=='equals'?'cal-con-ma':""}`}
            
        >
            <button 
                    className={`${getStyleName(value)} cal-button`}
                    onClick={handleBtnClick}
                >
                {value}</button>
        </div>
  )
}
