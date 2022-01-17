import React from 'react'

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.imag} alt="poster"/>
            <a href={props.url}><h4 className='name'>
            {props.userName}
            </h4></a>
            {props.star}
            {props.dob}
            {/* {props.nite} */}
            {/* hello */}
        </div>
    )
}

export default Card
