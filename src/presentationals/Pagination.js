import React from 'react';

const Pagination = (props) =>{


    return(

        <div className="pagination">
            <span id="back" onClick={props.onClickArrow} className="arrow"> &#60;&#60; </span>
                <span className="pages">Seite {props.currentPage} von {props.total}</span>
            <span id="fwd" onClick={props.onClickArrow} className="arrow"> >> </span>
        </div>

    )

}

export default Pagination;