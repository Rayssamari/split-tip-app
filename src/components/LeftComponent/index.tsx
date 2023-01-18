import { useState, useEffect, useContext } from 'react';
import './styles.scss';
import dollarImg from '../../assets/images/icon-dollar.svg';
import personImg from '../../assets/images/icon-person.svg';
import { TipPercentButton } from '../TipPercentButton';
import {context} from '../../contexts/context'

export const LeftComponent = () => {
    const [billValue, setBillValue] = useState<number | null>(null);
    const [numberOfPeople, setNumberOfPeople] = useState<number | null>(null); ;
    const [tipValue, setTipValue] = useState<number | null>(null); 
    const [customTipValue, setCustomTipValue] = useState<number | null>(null);

    const {state, dispatch} = useContext(context);

    const tipValues = [5, 10, 15, 25, 50]; 
    
    useEffect(() => {
        if(billValue !== null && numberOfPeople !== null) {
            if(tipValue !== null) {
                dispatch({
                    type: 'TIP_AMOUNT_CALCULATOR',
                    payload: {
                        billValue: billValue,
                        numberOfPeople: numberOfPeople,
                        tipValue: tipValue
                    }
                })
            }
            else if (customTipValue !== null ) {
                dispatch({
                    type: 'TIP_AMOUNT_CUSTOM_CALCULATOR',
                    payload: {
                        billValue: billValue,
                        numberOfPeople: numberOfPeople,
                        tipCustomValue: customTipValue
                    }
                })
            }
        }
    }, [billValue, numberOfPeople])

    const handleBillValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBillValue(parseFloat(e.target.value))
    }

  return (
    <div className='ContainerLeft'>
        <div className='inputInfo'>
            <span className='inputTitle'>Bill</span>
            <div className='inputDiv'>
                <input 
                    type="number" 
                    placeholder='0' 
                    value={billValue === null ? ' ' : billValue}
                    onChange={handleBillValue}
                />
                <img src={dollarImg} alt='Icone Input' />
            </div>
        </div>
        <div className='inputInfo'>
            <span className='inputTitle'>Select Tip %</span>
            <div className='gridNumbers'>
                {tipValues.map((tip, index) => ( 
                    <TipPercentButton 
                        percent={tip} 
                        onSelect={setTipValue} 
                        selected={tip===tipValue} 
                        key={index}
                    /> 
                ))} 
                <input 
                    type="number" 
                    placeholder='Custom' 
                    value={customTipValue === null ? ' ' : customTipValue}
                    onChange={(e)=>setCustomTipValue(parseFloat(e.target.value))}
                />
            </div>
        </div>
        <div className='inputInfo'>
            <span className='inputTitle'>Number of People</span>
            <div className='inputDiv'>
                <input 
                    type="number" 
                    placeholder='0' 
                    value={numberOfPeople === null ? ' ' : numberOfPeople} 
                    onChange={(e)=>setNumberOfPeople(parseFloat(e.target.value))}
                />
                <img src={personImg} alt='Icone Input' />
            </div>
        </div>
    </div>
  )
}