import React from 'react'
import { MdOutlineStarHalf, MdOutlineStarOutline, MdOutlineStar } from 'react-icons/md'


function RatingStar({ stars }) {
    let newStars = stars;
    const arr = [MdOutlineStarOutline, MdOutlineStarOutline, MdOutlineStarOutline, MdOutlineStarOutline, MdOutlineStarOutline]

    const decimalValue = stars - Math.floor(newStars)
    const floorValue = Math.floor(newStars);


    for (let i = 0; i < floorValue; i++)
        arr[i] = MdOutlineStar;

    if (decimalValue >= 0.5)
        arr[floorValue] = MdOutlineStarHalf;





    return (
        <div className='flex'>
            {/* <MdOutlineStar /> */}
            {arr.map((Icon, i) => (
                <span
                    key={i}
                    className='text-amber-400 text-lg'>
                    <Icon />
                </span>
            ))}

        </div>
    )
}

export default RatingStar