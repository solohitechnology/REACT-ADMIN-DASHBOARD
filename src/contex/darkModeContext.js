import { useReducer } from "react";
import { createContext } from "react"
import DarkMOdeReducer from "./darkModeReduser";

const INITIAL_STATE = {
    darkMode: false
}

export const DarkMOdeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DarkMOdeReducer, INITIAL_STATE)

    return (
        <DarkMOdeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
            {children}
        </DarkMOdeContext.Provider>
    );

};
