import React from 'react'

const ListCreator = (props) => {
    console.log(props.listKeys)
    return (
        <p className="text-center text-md-left">
        {props.listImputs.map((imput,i) => (
                imput !== undefined &&
                <>
                    {props.listKeys !== undefined && props.listKeys[i]}
                    {imput}
                    {(i !== props.listImputs.length-1) && " | "}
                </>
            )
        )}

        </p>
    )
}

export default ListCreator;