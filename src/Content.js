import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Content() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Basic?locale=enGB&collectible=1`, {
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
              "x-rapidapi-key": "4f6f8870c0mshe2cdfbd2d8bb945p1ceacfjsn94ca2e3b42a3"
            }
        });
        
        const items = await data.json();
        setItems(items);
        console.log(items);
    };

    
    return (
        <div className="row">
            {items.map(item =>(
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <div className="card mb-3" key={item.name}>
                        <img className="card-img-top" src={item.img} alt={"Image of " + item.name} />
                        <div className="card-body">
                            <p className="card-title">{item.name}</p>
                            <button type="button" className="btn btn-primary"><Link to={`/content/${item.name}`}>Details</Link></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
