import React, {useState} from 'react';

const useSearch = () => {
    const [searchWords, setSearchWords] = useState('');
    
    const handleSubmit = (e) => {
        // e.preventDefault();
        localStorage.setItem('searchWord', searchWords.toLowerCase()); 
        localStorage.setItem('currentPage', '1');
        // GET BACK: localStorage.getItem('searchWord')
        console.log(searchWords);
    }

    // const searchCards = (searchWord) => {
    //     setSearchWords(searchWord);
    //     localStorage.setItem('searchWord', searchWord);
    // }
    
    return (
        <form className="col-12 mb-4 search-bar" onSubmit={handleSubmit}>
            <span className="glyphicon">&#xe003;</span>
            <input className="form-control" type="text" name="name" placeholder="Search from these cards..." value={searchWords} onChange={(e) => setSearchWords(e.target.value)} />
        </form>
    )
}

export default useSearch;

