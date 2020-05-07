import React from 'react'

const Stash = () => {

    return (
        <div>
            <div class="scene">
                <div    class="gamecard"
                        onClick={(e)=>{e.target.onclick = null; e.target.className+=` is-flipped`}}
                >
                    <div class="gamecard__face gamecard__face--front">front</div>
                    <div class="gamecard__face gamecard__face--back">back</div>
                </div>
            </div>
        </div>
    )
}

export default Stash;