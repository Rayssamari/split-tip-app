import './styles.scss';
import { useContext } from 'react';
import { context } from '../../contexts/context';

export const RightComponent = () => {
    const {tipAmountPerPerson, tipAmountValuePerPerson, resetSlipTipApp}= useContext(context);

  return (
    <div className='ContainerRight'>
        <div className='tipContainer'>
            <div className='TipAmount'>
                <div className='TipAmountInfo'>
                    <span className='title'>Tip Amount</span>
                    <span className='subtitle'>/ person</span>
                </div>
                <div className='TipAmountValue'>
                    <span>{`$ ${tipAmountPerPerson()}`}</span>
                </div>
            </div>
            <div className='TipAmount'>
                <div className='TipAmountInfo'>
                    <span className='title'>Total</span>
                    <span className='subtitle'>/ person</span>
                </div>
                <div className='TipAmountValue'>
                    <span>{`$ ${tipAmountValuePerPerson()}`}</span>
                </div>
            </div>
        </div>
        <div>
            <button className='buttonReset' onClick={resetSlipTipApp}>RESET</button>
        </div>
    </div>
  )
}
