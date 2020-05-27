import React from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const ListedCard = ({ items, loading }) => {
    if(loading) {
        return <Loader />;
    }
    //console.log(items);
    return (
        <>
            {items.map((item, i) =>(
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6" key={item.name+i}>
                    <div className="card mb-3 scale-up-swing" > 
                    {/* {console.log(this)} */}
                        <Link to={`/content/${item.name}`}>
                            {item.img === undefined ? 
                                <img 
                                    className="grow card-img-top" 
                                    src={`https://dummyimage.com/193x295/f2f2f2/a1a1a1&text=${item.name}`}
                                    alt={"Image of " + item.name + " not found"} 
                                /> 
                            : 
                                <img 
                                    className="shadowed grow card-img-top" 
                                    src={item.img} 
                                    alt={"Image of " + item.name} 
                                    onError={(e)=>{e.target.onerror = null; e.target.src=`https://dummyimage.com/193x290/f2f2f2/a1a1a1&text=${item.name}`; e.target.alt=`Image of ${item.name} not found`}} 
                                /> 
                            }

                        </Link>
                        {/* <img className="card-img-top" src={item.img} onerror={() => {this.onerror=null;this.src='https://dummyimage.com/260x260/f2f2f2/a1a1a1&text=Image&nbsp;not&nbsp;found';}} alt={"Image of " + item.name} /> */}
                    </div>
                </div>
            ))}
        </>
    );
};

export default ListedCard;