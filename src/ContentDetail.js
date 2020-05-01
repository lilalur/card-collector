import React, { useState, useEffect } from 'react';

export default function ContentDetail( {match} ) {

    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState([]);

    const fetchItem = async () => {
        const controller = new AbortController()
        const signal = controller.signal
        const data = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${match.params.id}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                "x-rapidapi-key": "4f6f8870c0mshe2cdfbd2d8bb945p1ceacfjsn94ca2e3b42a3"
            }
        });

        const item = await data.json();
        item.forEach(item => setItem(item));

        console.log(item);
        
    };

    return (
        // <div>
        //     <h2>{item.name}</h2>
        //     <img src={item.img} alt={"Image of " + item.name} />
        //     <p>{item.faction}</p>
        //     <p>{item.playerClass}</p>
        //     <p>{item.rarity}</p>
        //     <p>{item.type}</p>
        // </div>


        // <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        //     <div className="col p-4 d-flex flex-column position-static">
        //         <strong className="d-inline-block mb-2 text-primary">World</strong>
        //         <h3 className="mb-0">Featured post</h3>
        //         <div className="mb-1 text-muted">Nov 12</div>
        //         <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
        //         <a href="#" className="stretched-link">Continue reading</a>
        //     </div>
        //     <div className="col-auto d-none d-lg-block">
        //         <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        //     </div>
        // </div>

        <div className="row align-items-center border-box-udnerit">
          <div className="col-lg-6 col-md-5 col-12 order-md-2 flex-container-center">
            <img src={item.img} className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate" alt={"Image of " + item.name} data-aos="fade-up" data-aos-delay="100" />
          </div>
          <div className="col-lg-6 col-md-7 col-12 order-md-1 aos-init aos-animate" data-aos="fade-up">

            <h1 className="display-3 text-center text-md-left">
              The card of <span className="text-primary">{item.name}</span> <br /> 
            </h1>
            
            <p>{item.rarity} | {item.faction} | {item.playerClass} | {item.type}</p>
          </div>
        </div>

    )
}
