import './styles.scss';
import dollarImg from '../../assets/images/icon-dollar.svg';
import personImg from '../../assets/images/icon-person.svg';
import { useContext } from 'react';
import { context } from '../../contexts/context';
import { useSplitTipCalculator } from '../../hooks/useSplitTipCalculator';
import { TipPercentButton } from '../TipPercentButton';


export const LeftComponent = () => {     
    const {bill, setBill, tipPercent, setTipPercent, tipCustom, setTipCustom,
    numberOfPeople, setNumberOfPeople} = useContext(context);

    const tipValues = [5, 10, 15, 25, 50]; 

  return (
    <div className='ContainerLeft'>
        <div className='inputInfo'>
            <span className='inputTitle'>Bill</span>
            <div className='inputDiv'>
                <input 
                    type="number" 
                    placeholder='0' 
                    value={bill === 0 ? ' ' : bill}
                    onChange={(e) => setBill(parseFloat(e.target.value))}
                />
                <img src={dollarImg} alt='Icone Input' />
            </div>
        </div> 
        <div className='inputInfo'>
            <span className='inputTitle'>Select Tip %</span>
            <div className='gridNumbers'>
                {tipValues.map((tip) => ( 
                    <TipPercentButton 
                        percent={tip} 
                        onSelect={setTipPercent} 
                        selected={tipPercent === tip} 
                        key={tip}
                    /> 
                ))} 
                
                <input 
                    type="number" 
                    placeholder='Custom' 
                    value={tipCustom === 0 ? 'CUSTOM' : tipCustom}
                    onChange={(e) => setTipCustom(parseFloat(e.target.value))}
                />
            </div>
        </div>
        <div className='inputInfo'>
            <span className='inputTitle'>Number of People</span>
            <div className='inputDiv'>
                <input 
                    type="number" 
                    placeholder='0' 
                    value={numberOfPeople === 0 ? ' ' : numberOfPeople}
                    onChange={(e) => setNumberOfPeople(parseFloat(e.target.value))}
                />
                <img src={personImg} alt='Icone Input' />
            </div>
        </div>
    </div>
  )
}