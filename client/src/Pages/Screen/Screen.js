import React, { useContext } from 'react';
import './Screen.css';
import { CalcContext } from '../../Context/CalcContext';
import { Textfit } from 'react-textfit';

export default function Screen() {
  const  { calc } = useContext(CalcContext);

  return (
    <Textfit 
      className='screen'
      max={70}
      mode='single'
    >{calc.num ? calc.num : calc.res}</Textfit>
  )
}
