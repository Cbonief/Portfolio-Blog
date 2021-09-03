import Head from 'next/head'
import { useState } from 'react'
import {getBeta} from '../utils/pushlowski'
import { makeArr } from '../utils'


export default function PushlowskiCalculator() {
    const [Alpha, setAlpha] = useState();
    const [Phi, setPhi] = useState();
    const [A, setA] = useState();
    const [outputString, setOutputString] = useState('β =');
    const [IsPhiAngle, setIsPhiAngle] = useState(false);

    return (
      <div className="container centered">
        <Head>
            <title>Carlos Franco</title>
        </Head>
        <h2 onClick={calculate} id="pushl">Pushlowski Calculator</h2>
        <div className='calculator-inputs'>
          <div className='input_container'>
            <p className='input_name'>Alpha:</p>
            <input className='input' fname='Alpha'type="number" value={Alpha} onChange={(e)=> setAlpha(e.target.value)}></input>
          </div>
          
          <div className='input_container'>
            <select name="phi_arg" onChange={(e)=> {
              
              setIsPhiAngle(e.target.value);
              console.log(e.target.value);}}>
              <option value={false}>Cos(ϕ)</option>
              <option value={true}>ϕ</option>
            </select>
            <input className='input' type="number" value={Phi} onChange={(e)=> setPhi(e.target.value)}></input>
          </div>

          <div className='input_container'>
            <p className='input_name'>a:</p>
            <input className='input' type="number" value={A} onChange={(e) => setA(e.target.value)}></input>
          </div>
          <button className='btn' onClick={calculate}>Calcular</button>
        </div>
        <div className='output-container centered'>
          <p>{outputString}</p>
        </div>
      </div>
    );

    function calculate() {
      setOutputString('β = ' + String(Math.round(getBeta(Alpha, Phi, A, IsPhiAngle) * 100) / 100)) + 'º';
    }

}

