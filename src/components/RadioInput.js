import { useState } from "react"

function RadioInput({item}) {
    const [selected, setSelected] = useState(10)
    const [data, setData] = useState({})

    const handleChange = (e) => {
        setSelected(+e.target.value)
        console.log(+e.target.value);
        console.log(e.target.name);
        setData({ ...data, [e.target.name]: +e.target.value })
        console.log(data);
    }
    return (
        <div className="container-question centered">
            <h3>{item.number}. {item.question} </h3>
            <ul className="rating">
                <li>
                    <input type="radio" name={`question-${item.number}`} id={`question-${item.number}-num1`} value='1' checked={selected === 1} onChange={handleChange} />
                    <label htmlFor={`question-${item.number}-num1`}>1</label>
                </li>
                <li>
                    <input type="radio" name={`question-${item.number}`} id={`question-${item.number}-num2`} value='2' checked={selected === 2} onChange={handleChange} />
                    <label htmlFor={`question-${item.number}-num2`}>2</label>
                </li>
                <li>
                    <input type="radio" name={`question-${item.number}`} id={`question-${item.number}-num3`} value='3' checked={selected === 3} onChange={handleChange} />
                    <label htmlFor={`question-${item.number}-num3`}>3</label>
                </li>
                <li>
                    <input type="radio" name={`question-${item.number}`} id={`question-${item.number}-num4`} value='4' checked={selected === 4} onChange={handleChange} />
                    <label htmlFor={`question-${item.number}-num4`}>4</label>
                </li>
                <li>
                    <input type="radio" name={`question-${item.number}`} id={`question-${item.number}-num5`} value='5' checked={selected === 5} onChange={handleChange} />
                    <label htmlFor={`question-${item.number}-num5`}>5</label>
                </li>
                <li>
                    <input type="radio" name={`question-${item.number}`} id={`question-${item.number}-num6`} value='6' checked={selected === 6} onChange={handleChange} />
                    <label htmlFor={`question-${item.number}-num6`}>6</label>
                </li>
                <li>
                    <input type="radio" name={`question-${item.number}`} id={`question-${item.number}-num7`} value='7' checked={selected === 7} onChange={handleChange} />
                    <label htmlFor={`question-${item.number}-num7`}>7</label>
                </li>
                <li>
                    <input type="radio" name={`question-${item.number}`} id={`question-${item.number}-num8`} value='8' checked={selected === 8} onChange={handleChange} />
                    <label htmlFor={`question-${item.number}-num8`}>8</label>
                </li>
                <li>
                    <input type="radio" name={`question-${item.number}`} id={`question-${item.number}-num9`} value='9' checked={selected === 9} onChange={handleChange} />
                    <label htmlFor={`question-${item.number}-num9`}>9</label>
                </li>
                <li>
                    <input type="radio" name={`question-${item.number}`} id={`question-${item.number}-num10`}  value='10' checked={selected === 10} onChange={handleChange} />
                    <label htmlFor={`question-${item.number}-num10`}>10</label>
                </li>

            </ul>

        </div>
    )
}

export default RadioInput