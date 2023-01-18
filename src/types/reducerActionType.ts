export type reducerActionType = {
    type: string,
    payload: {
        [key: string]: any;
    }
}

export type ProviderType = {
    children: JSX.Element;
}