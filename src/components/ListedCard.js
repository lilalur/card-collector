import React from 'react';
import { Link } from 'react-router-dom';

const ListedCard = ({ items, loading }) => {
    if(loading) {
        return <div className="loader"></div>;
    }

    return (
        <>
            {items.map(item =>(
                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-3 col-4" key={item.name}>
                    <div className="card mb-3" > 
                        <Link to={`/content/${item.name}`}>
                            {item.img === undefined ? <img className="card-img-top" src="https://dummyimage.com/193x295/f2f2f2/a1a1a1&text=Image&nbsp;not&nbsp;found" alt={"Image of " + item.name + " not found"} /> : <img className="card-img-top" src={item.img} alt={"Image of " + item.name} /> }
                        </Link>
                        {/* <img className="card-img-top" src={item.img} onerror={() => {this.onerror=null;this.src='https://dummyimage.com/260x260/f2f2f2/a1a1a1&text=Image&nbsp;not&nbsp;found';}} alt={"Image of " + item.name} /> */}
                    </div>
                </div>
            ))}
        </>
    );
};

export default ListedCard;