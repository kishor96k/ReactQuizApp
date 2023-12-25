import React, { useEffect, useState } from 'react';

export default function Timer({ setTimeOut, questionNumber })  {
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        if (timer === 0) {
            setTimeOut(true);
        }
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1)
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    })

    useEffect(() => {
        setTimer(30)
    }, [questionNumber])
    return timer;

};
