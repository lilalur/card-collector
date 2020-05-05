import React from 'react'

const Pagination = ({ itemPerPage, totalItems, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
        pageNumbers.push(i);
    }

    console.log(pageNumbers[0]===1)

    return (
        <nav>
            <ul className="pagination pagination-sm">
 
                <li key="first" className="page-item">
                    <a href={"#"+pageNumbers[0]} onClick={() => paginate(pageNumbers[0])}className="page-link" title="First">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">First</span>
                    </a>
                </li>

                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a href={"#"+number} onClick={() => paginate(number)} className="page-link" title={number}>
                            {number}
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                ))}

                <li key="last" className="page-item">
                    <a href={"#"+pageNumbers.length} onClick={() => paginate(pageNumbers.length)} className="page-link" title="Last">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Last</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;