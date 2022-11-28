import setTheme from "../util/ThemeHandler";
import SurveyContext from "../context/SurveyContext";
import translations from "../translations/translations";
import { useContext } from "react";
function Utilities() {

    const {dispatch} = useContext(SurveyContext)
    const handleChange= (e)=>{
        if(e.target.id==='theme'){
            dispatch({type: 'SET_THEME', payload: e.target.value})
            setTheme(e.target.value)
        } 
        if(e.target.id==='lang'){
            dispatch({type: 'SET_LANGUAGE', payload: translations[e.target.value].elements})
            dispatch({type: 'SET_QUESTIONS', payload: translations[e.target.value].questions})
        } 
        
    }
    
    return (
        <div className="utilities">
            <select name="theme" id="theme" onChange={handleChange}>
                <option value="default">Default</option>
                <option value="green">Green</option>
            </select>

            <select name="lang" id="lang" onChange={handleChange}>
                <option value="en">EN</option>
                <option value="el">EL</option>
            </select>
        </div>
    )
}

export default Utilities