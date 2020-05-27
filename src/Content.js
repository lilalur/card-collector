import React, {useState, useEffect} from 'react';
import ListedCard from './components/ListedCard';
import Pagination from './components/Pagination';
import FilterBar from './components/FilterBar';
import UseSearch from './components/useSearch';

export default function Content() {
    const [items, setItems] = useState([]);
    //for filtering
    const [searchWords, setSearchWords] = useState('');
    //for loading data, maybe we dont need
    const [loading, setLoading] = useState(false);
    // For pagination
    const [currentPage, setCurrentPage] = useState(0);
    const [itemPerPage] = useState(12);

    const [filter, setFilter] = useState([localStorage.getItem('currentCategory') === null ? 'sets' : localStorage.getItem('currentCategory'),localStorage.getItem('currentSubCategory') === null ? 'Classic' : localStorage.getItem('currentSubCategory')]);
    const [locale, setLocale] = useState('enGB');
    const [collectible, setCollectible] = useState(1);

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            const data = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${filter[0]}/${filter[1]}?locale=${locale}&collectible=${collectible}`, {
                    "method": "GET",
                    "headers": {
                    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                    "x-rapidapi-key": "4f6f8870c0mshe2cdfbd2d8bb945p1ceacfjsn94ca2e3b42a3"
                    }
                }
            ).catch(err => {
                console.log(err);
            });
            console.log(data);
            const items = await data.json();
            data.ok ? setItems(items.filter((item) => item.name.toLowerCase().includes(searchWords.toLowerCase()))) : setItems([]);
            localStorage.setItem('searchWord', ''); 
            //this filter works for searching in the entered stuff in the array
            // .filter((item) => item.name.includes('as')) 
            //setCurrentPage(1);
            localStorage.getItem('currentPage') === null ? setCurrentPage(1) : setCurrentPage(parseInt(localStorage.getItem('currentPage')));
            setLoading(false);
        };

        fetchItems();
    }, [searchWords, filter, collectible]);

    //get current posts
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItem = items.slice(indexOfFirstItem, indexOfLastItem);

    //change page 
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        localStorage.setItem('currentPage', pageNumber);
    };

    const handleChange = e => {
        setSearchWords(e.target.value);
        localStorage.clear('currentPage');
    };

    const handleSubmit = e => {
        e.preventDefault();
    };

    const filterByThisItem = e => {
        //console.log([e.target.parentElement.previousSibling.textContent.replace(/standard|wild/gi, 'sets'), e.target.textContent.replace(/ /g, '%2520')]);
        localStorage.setItem('currentCategory', e.target.parentElement.previousSibling.textContent.replace(/standard|wild/gi, 'sets'));
        localStorage.setItem('currentSubCategory', e.target.textContent.replace(/ /g, '%2520'));
        localStorage.clear('currentPage');
        setFilter([e.target.parentElement.previousSibling.textContent.replace(/standard|wild/gi, 'sets'), e.target.textContent.replace(/ /g, '%2520')]);
    };
    
    const filterByCollectible = () => {
        localStorage.clear('currentPage');
        setCollectible(collectible === 0 ? 1 : 0);
    };
    //console.log(localStorage.getItem('currentPage') + " the local storage value");
    ///experimenting
    //console.log(indexOfFirstItem, currentPage, currentPage+1, currentPage+2, '...', indexOfLastItem, " MARKED");
    // const searchCards = (searchWord) => {
    //     setSearchWords(searchWord);
    //     localStorage.setItem('searchWord', searchWord);
    // }

    // test
    // setTimeout(() => { setCurrentPage(2); }, 10000);
    
    return (
        <div className="row">
            <div className="col-12">
                <p>Page {currentPage}/{Math.ceil(items.length/itemPerPage)} ({items.length} card{items.length !== 1 && 's'})</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 mb-3 filterbar">
                <FilterBar filterByThisItem={filterByThisItem} filterByCollectible={filterByCollectible} collectible={collectible} />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12">
                <div className="row">
                    <UseSearch currentPage={currentPage} handleChange={handleChange} handleSubmit={handleSubmit} />
                </div>
                
                <div className="row" id="list-container">
                    
                    <ListedCard items={currentItem} loading={loading} />
                    { (Math.ceil(items.length/itemPerPage) === 0 && loading === false) && <div className="col-12">No cards found...</div> }

                    <div className="col-12">
                    { (items.length / itemPerPage) >= 1 && <Pagination itemPerPage={itemPerPage} totalItems={items.length} paginate={paginate} currentPage={currentPage} /> }
                    </div>
                </div>
            </div>
        </div>
    )
}
