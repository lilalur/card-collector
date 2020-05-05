import React, {useState, useEffect} from 'react';
import ListedCard from './components/ListedCard';
import Pagination from './components/Pagination';
// import FilterBar from './FilterBar';

export default function Content() {
    const [items, setItems] = useState([]);

    //for loading data, maybe we dont need
    const [loading, setLoading] = useState(false);
    // For pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(10);

    useEffect(() => {
        
        fetchItems();
        
    }, []);

    const fetchItems = async () => {
        setLoading(true);
        const data = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Basic?locale=enGB&collectible=1`, {
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
              "x-rapidapi-key": "4f6f8870c0mshe2cdfbd2d8bb945p1ceacfjsn94ca2e3b42a3"
            }
        });
        const items = await data.json();
        setItems(items);
        setLoading(false);
    };

    //get current posts
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItem = items.slice(indexOfFirstItem, indexOfLastItem);

    //change page 
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="row">
            {/* <FilterBar /> */}
            <ListedCard items={currentItem} loading={loading} />
            <Pagination itemPerPage={itemPerPage} totalItems={items.length} paginate={paginate} />
        </div>
    )
}
