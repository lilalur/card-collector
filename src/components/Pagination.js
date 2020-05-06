import React from 'react'

const Pagination = ({ itemPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
        pageNumbers.push(i);
    }

    //console.log(currentPage)

    return (
        <nav className="row m-auto">
            <ul className="pagination pagination-sm">

                <li key="firstpaginated" className={"page-item " + (currentPage === pageNumbers[0] ? 'disabled' : '')}>
                    <a href={"#"+pageNumbers[0]} onClick={() => paginate(pageNumbers[0])}className="page-link" title="First">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">First</span>
                    </a>
                </li>
                <li key="nextpaginated" className={"page-item " + (currentPage === pageNumbers[0] ? 'disabled' : '')}>
                    <a href={"#"+currentPage} onClick={() => paginate(currentPage-=1)}className="page-link" title="Previous">
                        <span aria-hidden="true">&#60;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>

                {pageNumbers.map(number => (
                    <li key={number+"paginated"} className={"page-item " + (number===currentPage ? 'active' : '')}>
                        <a href={"#"+number} onClick={() => paginate(number)} className="page-link" title={number}>
                            {number}
                            <span className="sr-only">(current)</span>
                        </a>
                    </li>
                ))}

                <li key="previouspaginated" className={"page-item " + (currentPage === pageNumbers.length ? 'disabled' : '')}>
                    <a href={"#"+currentPage} onClick={() => paginate(currentPage+=1)}className="page-link" title="Next">
                        <span aria-hidden="true">&#62;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
                <li key="lastpaginated" className={"page-item " + (currentPage === pageNumbers.length ? 'disabled' : '')}>
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