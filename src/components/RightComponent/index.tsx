import './styles.scss';

export const RightComponent = () => {
  return (
    <div className='ContainerRight'>
        <div className='tipContainer'>
            <div className='TipAmount'>
                <div className='TipAmountInfo'>
                    <span className='title'>Tip Amount</span>
                    <span className='subtitle'>/ person</span>
                </div>
                <div className='TipAmountValue'>
                    <span>$0.00</span>
                </div>
            </div>
            <div className='TipAmount'>
                <div className='TipAmountInfo'>
                    <span className='title'>Total</span>
                    <span className='subtitle'>/ person</span>
                </div>
                <div className='TipAmountValue'>
                    <span>$0.00</span>
                </div>
            </div>
        </div>
        <div>
            <button className='buttonReset'>RESET</button>
        </div>
    </div>
  )
}
