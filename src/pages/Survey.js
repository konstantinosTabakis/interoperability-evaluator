import Pagination from "../components/Pagination"
import RadioInput from "../components/RadioInput"
import SurveyContext from '../context/SurveyContext'
import { useContext } from 'react'
import { BsChevronRight , BsChevronLeft } from "react-icons/bs"
import { useState } from "react"
function Survey() {
    const {language, questions} = useContext(SurveyContext)
    const [currentPage,setCurrentPage]= useState(1)

    const nextPage =()=>{
        if(currentPage<3) setCurrentPage(currentPage+1)
    }
    const previousPage =()=>{
        if(currentPage>1) setCurrentPage(currentPage-1)
    }
    return (
        <div className="survey">
            <Pagination page={currentPage}/>
            {/* <Utilities/> */}
            <div className="circle left" onClick={previousPage}> <BsChevronLeft/> </div>
            <div className="circle right" onClick={nextPage}> <BsChevronRight/> </div>
            <h2 className="centered"> {language.homepage_title} </h2>
            <div className="survey-inner">
                {questions.map((item)=>(
                    <RadioInput item={item} key={item.number} />
                ))}
                 
            </div>
        </div>
    )
}

export default Survey