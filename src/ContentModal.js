import React, { useState, useEffect } from 'react';

export default function ContentModal( {match} ) {
    const [item, setItem] = useState([]);
    const [image, setImage] = useState('https://dummyimage.com/260x260/f2f2f2/a1a1a1&text=Image&nbsp;not&nbsp;found');
    const [loading, setLoading] = useState(false); // for the loading
    
    useEffect(() => {
        fetchItem();
    }, []);

    const fetchItem = async () => {
        setLoading(true);
        const data = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${match.params.id}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                "x-rapidapi-key": "4f6f8870c0mshe2cdfbd2d8bb945p1ceacfjsn94ca2e3b42a3"
            }
        }).catch(err => { console.error(err); });
        const item = await data.json();
        setItem(item[0]);
        setLoading(false);
    };
    console.log(item)
    if(loading) {
      return <div className="loader"></div>
    }

    return (
        <div className="row align-items-center" key={item.cardId}>
          <div className="col-lg-6 col-md-5 col-12 order-md-2 flex-container-center" >
            {item.img === undefined ? 
              <img  className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate" 
                    src={`https://dummyimage.com/307x465/f2f2f2/a1a1a1&text=${item.name}`}
                    alt={"Image of " + item.name + " not found"} 
                    data-aos="fade-up" 
                    data-aos-delay="100" 
              /> 
            : 
              <img  className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate" 
                    src={item.imgGold} 
                    onError={(e)=>{e.target.onerror = null; e.target.src=`https://dummyimage.com/193x290/f2f2f2/a1a1a1&text=${item.name}`; e.target.alt=`Image of ${item.name} not found`}} 
                    alt={"Image of " + item.name} 
                    data-aos="fade-up" 
                    data-aos-delay="100" 
              />
            }
          </div>
          <div className="col-lg-6 col-md-7 col-12 order-md-1 aos-init aos-animate" data-aos="fade-up">

            <h1 className="display-3 text-center text-md-left">
              The card of <span className="text-primary">{item.name}</span> <br /> 
            </h1>
            <p className="text-center text-md-left">
              {item.cost !== undefined && "Cost: "+ item.cost +" | "} 
              {item.attack !== undefined && "Attack: "+ item.attack +" | "}
              {item.health !== undefined && "Health: "+ item.health }
            </p>

            {item.text !== undefined && <p className="text-center text-md-left">{item.text.replace(/(<([^>]+)>)/ig, "")}</p>}

            <p className="text-center text-md-left">
              {item.rarity !== undefined && item.rarity +" | "} 
              {item.faction !== undefined && item.faction +" | "}
              {item.playerClass !== undefined && item.playerClass+" | "}
              {item.type !== undefined && item.type}
            </p>
          </div>
        </div>

    )
}
