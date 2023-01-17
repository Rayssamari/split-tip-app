
type TipPercentButtonProps = { 
    percent: number; 
    selected: boolean; 
    onSelect: (percent: number) => void; 
}; 

export const TipPercentButton = ({percent, selected, onSelect, }: TipPercentButtonProps) => { 
    const className = `btnNumber ${selected ? "active" : ""}`; 
    return ( 
        <button className={className} onClick={() => onSelect(percent)}> 
            {percent}% 
        </button> 
        
    ); 
}