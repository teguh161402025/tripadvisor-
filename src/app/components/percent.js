'use client'
import React from 'react'
import { useState, useEffect } from 'react'

const Percent = ({ duration, target }) => {
    const [percent, setPercent] = useState(0);


    const fillProgressBar = () => {
        const interval = duration / target
        let i = 1;
        const intervalId = setInterval(() => {

            if (i <= Math.floor(target)) {
                console.log(percent)
                setPercent(i);
                i++;

            } else {
                clearInterval(intervalId);
            }
        }, interval);
    };
    useEffect(() => {
        fillProgressBar();
    }, []);


    return (
        <div> {percent}</div>
    )
}

export default Percent