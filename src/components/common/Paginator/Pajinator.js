import classes from "./Paginator.module.css";

import React, {useState} from "react";

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionSize =10;
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div>
            <div className={classes.paginator}>
                {/*{*/}
                {/*    pages.map(page => {*/}
                {/*            return (*/}
                {/*                //     ( isCurrentPage)  => ({isCurrentPage ? 'className=classes.selectedPage'*/}
                {/*                // :'className={classes.page}' })*/}
                {/*                <div className={classes.numberPage}>*/}
                {/*            <span*/}
                {/*                className={props.currentPage === page && classes.selectedPage}*/}
                {/*                onClick={(e) => {*/}
                {/*                    props.onChangePages(page);*/}
                {/*                }}>{page}</span>*/}
                {/*                </div>*/}
                {/*            )*/}
                {/*        }*/}
                {/*    )*/}
                {/*}*/}
                { portionNumber > 1 &&

                    <button className={classes.bottomButton}  onClick={() => { setPortionNumber(1) } }>FIRST</button>  }
                { portionNumber > 1 &&

                    <button className={classes.showMore}  onClick={() => { setPortionNumber(portionNumber - 1) } }>PREV</button> }

                  {pages
                    .filter(page => page >= leftPortionPageNumber && page<=rightPortionPageNumber)
                    .map((p) => {
                        return <div className={classes.numberPage} key={p}>
                            <span
                                className={props.currentPage === p && classes.selectedPage}
                                onClick={(e) => {
                                    props.onChangePages(p);
                                }}>{p}</span>
                        </div>
                    })}
                { portionCount > portionNumber &&
                    <button className={classes.showMore}  onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
                { portionCount > portionNumber &&
                    <button className={classes.bottomButton}  onClick={() => { setPortionNumber(portionCount) }}>LAST</button> }

            </div>
            {/*<div className={classes.divShow}>*/}
            {/*    <button className={classes.showMore} onClick={(e) => {*/}
            {/*        props.onShowMore(-1)*/}
            {/*    }}>Show less*/}
            {/*    </button>*/}
            {/*    <button className={classes.showMore} onClick={(e) => {*/}
            {/*        props.onShowMore(1)*/}
            {/*    }}>Show more*/}
            {/*    </button>*/}


            {/*</div>*/}
            <div>Current page: {props.currentPage}</div>

        </div>
    )
}
export default Paginator