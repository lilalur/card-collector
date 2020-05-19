import React from 'react'

export const Loader = () => {
    let cards = [];
    for(let i = 0; i < 5; i++) {
        cards.push(
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 loader--dot" key={i+"loadercard"}>
                <div className="card mb-3 scale-up-swing">
                        <img className="shadowed grow card-img-top" src="http://wow.zamimg.com/images/hearthstone/backs/original/Card_Back_Default.png"  />
                </div>
            </div>
        );
    }

    return (
        <div className='card-loader'>
        {cards}
        </div>
    )
}
export default Loader;