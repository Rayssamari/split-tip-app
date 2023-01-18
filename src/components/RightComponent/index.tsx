import { useContext } from 'react';
import './styles.scss';
import { context } from '../../contexts/context';

export const RightComponent = () => {
  const { state } = useContext(context);

  return (
    <div className='ContainerRight'>
        <div className='tipContainer'>
            <div className='TipAmount'>
                <div className='TipAmountInfo'>
                    <span className='title'>Tip Amount</span>
                    <span className='subtitle'>/ person</span>
                </div>
                <div className='TipAmountValue'>
                    <span>${state.tipAmount.resultTipAmount}</span>
                </div>
            </div>
            <div className='TipAmount'>
                <div className='TipAmountInfo'>
                    <span className='title'>Total</span>
                    <span className='subtitle'>/ person</span>
                </div>
                <div className='TipAmountValue'>
                    <span>${state.tipAmount.resultTotalAmount}</span>
                </div>
            </div>
        </div>
        <div>
            <button className='buttonReset'>RESET</button>
        </div>
    </div>
  )
}
