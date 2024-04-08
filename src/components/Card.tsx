'use client'
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';
import { useState } from 'react';

export default function Card({hospitalName, imgSrc, onRating}:{hospitalName: string, imgSrc: string, onRating?:Function}) {
    const [rating, setRating] = useState<number | null>(5);
    return (
        <InteractiveCard>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Product Picture'
                fill={true}
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[15%] p-[10px]'>{hospitalName}</div>
            {
                onRating? <Rating id={hospitalName+" Rating"} name={hospitalName+" Rating"}
                data-testid={hospitalName+" Rating"}
                value={rating}
                onClick={(e)=>{e.stopPropagation(); e.preventDefault();}}
                onChange={(event, newValue)=>{setRating(newValue); onRating(hospitalName, newValue);}}
                ></Rating> : ''
            }
        </InteractiveCard>
    );
}