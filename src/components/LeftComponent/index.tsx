import { useState, useEffect } from 'react';
import './styles.scss';
import dollarImg from '../../assets/images/icon-dollar.svg';
import personImg from '../../assets/images/icon-person.svg';
import { TipPercentButton } from '../TipPercentButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { setBillValue, setNumberOfPeople, setTip, setTipCustom} from '../../redux/reducers/tipAmoutReducer';

export const LeftComponent = () => {
    const tipAmount = useSelector((state: RootState) => state.tipAmount);
    const dispatch = useDispatch();
    const tipValues = [5, 10, 15, 25, 50]; 

    const handleBillInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setBillValue(e.target.value))
    }

    const handleNumberPeopleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setNumberOfPeople(e.target.value))
    }

    const handleTip = (e:React.ChangeEvent<HTMLButtonElement>) => {
        dispatch(setTip(e.target.value))
    }

    const handleTipCustom = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setTipCustom(e.target.value))
    }

  return (
    <div className='ContainerLeft'>
        <div className='inputInfo'>
            <span className='inputTitle'>Bill</span>
            <div className='inputDiv'>
                <input 
                    type="number" 
                    placeholder='0' 
                    value={tipAmount.billValue}
                    onChange={handleBillInput}
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
                        onSelect={(e) => dispatch(setTip(tipAmount.tip))} 
                        selected={tip===tipAmount.tip} 
                        key={index}
                    /> 
                ))} 
                <input 
                    type="number" 
                    placeholder='Custom' 
                    value={tipAmount.tipCustom}
                    onChange={handleTipCustom}
                />
            </div>
        </div>
        <div className='inputInfo'>
            <span className='inputTitle'>Number of People</span>
            <div className='inputDiv'>
                <input 
                    type="number" 
                    placeholder='0' 
                    value={tipAmount.numberOfPeople} 
                    onChange={handleNumberPeopleInput}
                />
                <img src={personImg} alt='Icone Input' />
            </div>
        </div>
    </div>
  )
}