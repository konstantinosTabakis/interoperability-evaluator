
function Pagination({page}) {
     
    return (
        <div className="pagination">
            <div className={(page===1? "itm active": "itm")}></div>
            <div className={(page===2? "itm active": "itm")}></div>
            <div className={(page===3? "itm active": "itm")}></div>
        </div>
    )
}

export default Pagination