import React from 'react';
import { Link } from 'react-router-dom';

const ListedCard = ({ items, loading }) => {
    if(loading) {
        return <h2>loading...</h2>;
    }

    return (
        <>
            {items.map(item =>(
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={item.name}>
                    <div className="card mb-3" > 

                        {item.img === undefined ? <img className="card-img-top" src="https://dummyimage.com/260x260/f2f2f2/a1a1a1&text=Image&nbsp;not&nbsp;found" alt={"Image of " + item.name + " not found"} /> : <img className="card-img-top" src={item.img} alt={"Image of " + item.name} /> }

                        {/* <img className="card-img-top" src={item.img} onerror={() => {this.onerror=null;this.src='https://dummyimage.com/260x260/f2f2f2/a1a1a1&text=Image&nbsp;not&nbsp;found';}} alt={"Image of " + item.name} /> */}

                        <div className="card-body">
                            <p className="card-title">{item.name}</p>
                            <button type="button" className="btn btn-primary"><Link to={`/content/${item.name}`}>Details</Link></button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ListedCard;