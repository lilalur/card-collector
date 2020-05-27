import React, {useState, useEffect} from 'react';

export const FilterBar = ( {filterByThisItem, filterByCollectible, collectible} ) => {
    const [filtersCollection, setFiltersCollection] = useState([]);
    const [loading, setLoading] = useState(false); // for the loading

    useEffect(() => {
        fetchFiltersCollection();
    }, []);

    const fetchFiltersCollection = async () => {
        setLoading(true);
        const response = await fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/info", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                "x-rapidapi-key": "4f6f8870c0mshe2cdfbd2d8bb945p1ceacfjsn94ca2e3b42a3"
            }
        }).catch(err => { console.error(err); });
        const filtersCollection = await response.json();
        setFiltersCollection(filtersCollection);
        setLoading(false);
    };
        
    
    if(loading) {
        return <div className='loader--text'></div>
    }
    return (
        <div className="col-lg-11 col-md-11 col-sm-12 background-light card" id="filter-bar">
            <p>Filter by</p>
            {/* Set the slice for 1 to cut out the patch note from the filter list and set for -1 to cut out the locales as that not part of this filtering */}
            {(Object.keys(filtersCollection).slice(1,-1).map((item, i) => 
                <div key={i+"filtercategory"}>
                    <h5 className="mt-3 mb-3 filter-header">{item}
                        <span className="js-indicator-arrowup">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#333" width="24px" height="24px">
                                <path d="M12 14.69L5.03 7.72a.75.75 0 0 0-1.06 1.06l7.5 7.5a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 14.69z"></path>
                            </svg>
                        </span>
                    </h5>
                    <ul className="list-group">
                      {/* Creating and listing all the subcategory as a list under each category */}
                        {Object.values(filtersCollection).slice(1)[i].map((listItem, n) => 
                            <li className="list-group-item" key={i+n+"filteritem"} onClick={filterByThisItem}>{listItem}</li>
                        )}
                    </ul>
                </div>
            ))}
            <hr />
            <p alt="col" className="d-inline-flex justify-content-between align-items-center"><span>Collectibles only:</span> <input type="checkbox" id="myCheck" onChange={filterByCollectible} defaultChecked={collectible===1?1:0}></input></p>
        </div>
    )
}

export default FilterBar;