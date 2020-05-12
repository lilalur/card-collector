import React from 'react'
// This module can accept any imput (listImputs) and generate a string from them separated with a | optionally it can get a key property too (listKeys) wich comes right front of the main imput
const ListCreator = (props) => {
    
    return (
        <p className="text-center text-md-left">
        {props.listImputs.map((imput,i) => (
                imput !== undefined &&
                <span className="content-modal-stats" key={props.listImputs+i}>
                    {props.listKeys !== undefined && props.listKeys[i]}
                    {imput}
                    {/* {(i !== props.listImputs.length-1) && " | "} */}
                </span>
            )
        )}
        </p>
    )
}

export default ListCreator;