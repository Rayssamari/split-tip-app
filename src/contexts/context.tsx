import { createContext} from "react";
import { useSplitTipCalculator } from "../hooks/useSplitTipCalculator";


type ContextType = ReturnType<typeof useSplitTipCalculator>; 

export const context = createContext<ContextType>({   
    bill : 0,
    setBill: () => {},
    tipPercent: 0,
    setTipPercent: () => {},
    tipCustom: 0,
    setTipCustom: () => {},
    numberOfPeople: 0,
    setNumberOfPeople: () => {},
    tipAmountPerPerson: () => '0',
    tipAmountValuePerPerson: () => '0',
    resetSlipTipApp: () => {}
});

export const ContextProvider = ({children}: React.PropsWithChildren) => {
    const value = useSplitTipCalculator(); 
    return <context.Provider value={value}>{children}</context.Provider>;
}
