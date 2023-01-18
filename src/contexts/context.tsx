import { createContext, useReducer } from "react";
import { tipAmountType, tipInitialState, tipAmountReducer  } from "../reducers/tipAmountReducer";
import { reducerActionType, ProviderType } from "../types/reducerActionType";

type InitialStateType = {
    tipAmount: tipAmountType;
}

type ContextType = {
    state: InitialStateType;
    dispatch: React.Dispatch<any>;
}

const initialState = {
    tipAmount: tipInitialState
}

export const context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state: InitialStateType, action: reducerActionType) => ({
    tipAmount: tipAmountReducer(state.tipAmount, action)
});

export const ContextProvider = ({children}: ProviderType) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);
    return(
        <context.Provider value={{state, dispatch}}>
            {children}
        </context.Provider>
    )
}