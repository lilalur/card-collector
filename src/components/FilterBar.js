import React, {useState, useEffect} from 'react';

export const FilterBar = () => {
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
        //filters.forEach(filters => {setFilters(filters);});
        setLoading(false);
        // console.log(array(filtersCollection));
        // console.log(filtersCollection);
        // console.log("keys");
        // console.log(Object.keys(filtersCollection));
        // console.log("values");
        // console.log(Object.values(filtersCollection));
        
        // console.log("entries");
        // console.log(Object.entries(filtersCollection));

        // Try to find the non array entries and turn ito an array with only 1 entry
        // Object.entries(filtersCollection).map((item, i) => {
        //     console.log(item[0] + " is " + Array.isArray(item[0]));
        //     Object.entries(filtersCollection).map((listItem, n) => {
        //         console.log(" - " +listItem[1] + " is " + Array.isArray(listItem));
        //     })
        // })
    };
    // const filterableList = Object.values(filtersCollection).map((item, i) => {
    //     Array.isArray(item[i]) ? item[i].split() : ''
    // });
        
    
    

    if(loading) {
        return <div className='loader--text'></div>
    }
    return (
        <div className="col-lg-11 col-md-11 col-sm-12 background-light card" id="filter-bar">
            <p>Filter by</p>
            {(Object.keys(filtersCollection).slice(1).map((item, i) => 
                <div key={i+"filtercategory"}>
                    <h5 className="mt-3 mb-3 filter-header">{item}
                        <span className="js-indicator-arrowup">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#333" width="24px" height="24px">
                                <path d="M12 14.69L5.03 7.72a.75.75 0 0 0-1.06 1.06l7.5 7.5a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 14.69z"></path>
                            </svg>
                        </span>
                    </h5>
                    <ul className="list-group">     
                            {Object.values(filtersCollection).slice(1)[i].map((listItem, n) => 
                                <li className="list-group-item" key={i+n+"filteritem"}>{listItem}</li>
                            )}
                    </ul>
                </div>
            ))}

            {/* {filtersCollection.map((item, index) =>(
                <h3>{Object.keys(item)[index]}</h3>
                <ul className="list-group">
                    <li className="list-group-item">{Object.values(item)[index]}</li>
                </ul>
            ))} */}
        </div>
    )
}

export default FilterBar;