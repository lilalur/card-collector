import React from 'react';

const useSearch = ( {searchWords, handleSubmit, handleChange} ) => {
    
    return (
        <form className="col-12 mb-4 search-bar" onSubmit={handleSubmit}>
            <span className="glyphicon">&#xe003;</span>
            <input className="form-control" type="text" name="name" placeholder="Search from these cards..." value={searchWords} onChange={handleChange} />
        </form>
    )
}

export default useSearch;

