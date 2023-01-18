import { reducerActionType } from "../types/reducerActionType";

export type tipAmountType = {
    billValue: number,
    numberOfPeople: number,
    tipValue: number,
    tipCustomValue: number,
    resultTipAmount: number,
    resultTotalAmount: number
}

export const tipInitialState: tipAmountType = {
    billValue: 0,
    numberOfPeople: 0,
    tipValue: 0,
    tipCustomValue: 0,
    resultTipAmount: 0,
    resultTotalAmount: 0
}

export const tipAmountReducer = (state: tipAmountType, action: reducerActionType) => {
    switch(action.type){
        case 'TIP_AMOUNT_CALCULATOR': 
            if(state.billValue > 0 && state.numberOfPeople > 0){
                let tip = ((state.billValue * state.tipValue) / 100) / state.numberOfPeople;
                return {...state, resultTipAMount: tip};
                break;
            }
        case 'TIP_AMOUNT_CUSTOM_CALCULATOR':
          if(state.billValue > 0 && state.numberOfPeople > 0){
            let tip = ((state.billValue * state.tipCustomValue) / 100) / state.numberOfPeople;
            return {...state, resultTipAMount: tip};
            break;
          }
        case 'TIP_AMOUNT_TOTAL':
            if(state.billValue > 0 && state.numberOfPeople > 0){
                let total = (state.billValue + ((state.billValue * state.tipCustomValue) / 100)) / state.numberOfPeople;
                return {...state, resultTotalAmount: total};
                break;
            }
    }
    return state;
}

