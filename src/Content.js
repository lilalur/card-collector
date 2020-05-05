import React, {useState, useEffect} from 'react';
import ListedCard from './components/ListedCard';
import Pagination from './components/Pagination';
import FilterBar from './FilterBar';

export default function Content() {
    const [items, setItems] = useState([]);

    //for loading data, maybe we dont need
    const [loading, setLoading] = useState(false);
    // For pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(9);

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
        }).catch(err => {
            console.error(err);
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
    const paginate = (pageNumber) => {setCurrentPage(pageNumber);}
    // console.log(currentPage);
    return (
        <div className="row border-box-udnerit">
            <div className="col-12">
                <p>Page {currentPage}/{Math.ceil(items.length/itemPerPage)} ({items.length} card{items.length === 1 ? '' : 's'})</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 mb-3 filterbar">
                <FilterBar />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12">
                <div className="row">
                
                    <ListedCard items={currentItem} loading={loading} />
                    
                    <div className="col-12">
                    { (items.length - itemPerPage) >= 1 ? <Pagination itemPerPage={itemPerPage} totalItems={items.length} paginate={paginate} currentPage={currentPage} /> : null }
                    </div>
                </div>
            </div>
        </div>
    )
}
