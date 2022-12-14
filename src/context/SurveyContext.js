import { createContext, useReducer } from "react"
import SurveyReducer from "./SurveyReducer"
import translations from "../translations/translations"
const SurveyContext = createContext()

export const SurveyProvider = ({ children }) => {
    const initialState = {
        theme: 'default',
        language: translations.en.elements,
        questions: translations.en.questions
    }

    const [state, dispatch] = useReducer(SurveyReducer, initialState)

    return <SurveyContext.Provider value={{ ...state, dispatch }}>
        {children}
    </SurveyContext.Provider>

}

export default SurveyContext