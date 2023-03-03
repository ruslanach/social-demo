import classes from "./Paginator.module.css";
import React, {useState} from "react";
import Pagination from 'react-bootstrap/Pagination';


type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onChangePages: (pageNumber: number) => void
}
let PaginatorNew: React.FC<PropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionSize = 10;
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (

        <div className={classes.paginator}>
            <Pagination size="sm">


                {portionNumber > 1 &&
                    <Pagination.First onClick={(e) => {
                        setPortionNumber(1)
                    }}/>}
                {portionNumber > 1 &&
                    <Pagination.Prev onClick={(e) => {
                        setPortionNumber(portionNumber - 1)
                    }}/>
                }

                {pages
                    .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map((p) => {
                        return (
                            <Pagination.Item key={p} active={props.currentPage === p} onClick={(e) => {
                                props.onChangePages(p)
                            }}>
                                {p}
                            </Pagination.Item>
                        )
                    })}
                {portionCount > portionNumber &&
                    <Pagination.Next onClick={(e) => {
                        setPortionNumber(portionNumber + 1)
                    }}/>
                }
                {portionCount > portionNumber &&
                    <Pagination.Last onClick={(e) => {
                        setPortionNumber(portionCount)
                    }}/>
                }


            </Pagination>

        </div>
    )
}
export default PaginatorNew