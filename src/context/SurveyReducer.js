const SurveyReducer = (state, action) =>{
    switch(action.type){
        case 'SET_THEME':
             
            return{
                ...state,
                theme: action.payload,
            }
        case 'SET_LANGUAGE':
             
            return{
                ...state,
                language: action.payload,
            }
        
        case 'SET_QUESTIONS':
             
            return{
                ...state,
                questions: action.payload,
            }
        
        default:
            return state
    }
}

export default SurveyReducer