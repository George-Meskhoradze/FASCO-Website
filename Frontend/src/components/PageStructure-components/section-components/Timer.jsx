import React from 'react'
import { useEffect, useRef, useState } from 'react'

export default function Timer() {

    const [day, setDay] = useState("00")
    const [hour, setHour] = useState("00")
    const [minute, setMinute] = useState("00")
    const [second, setSecond] = useState("00")

    let interval = useRef();

    const StartTimer = () => {
        const countDownTime = new Date('Apr 25, 2024 00:00:00').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownTime - now

            const itsDay = Math.floor(distance / (1000 * 60 * 60 * 24))
            const itsHour = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            const itsMinute = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))
            const itsSecond = Math.floor(distance % (1000 * 60) / (1000))

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setDay(itsDay)
                setHour(itsHour)
                setMinute(itsMinute)
                setSecond(itsSecond)
            }
        }, 1000)
    }

    useEffect(() => {
        StartTimer()
        return () => {
            clearInterval(interval.current)
        }
    })

  return (
    <div className='calendar-time'>
        <div className='time'>
            <div>
                <h1>{day}</h1>
            </div>
            <h1>Day</h1>
        </div>

        <div className='time'>
            <div>
                <h1>{hour}</h1>
            </div>
            <h1>Hr</h1>
        </div>

        <div className='time'>
            <div>
                <h1>{minute}</h1>
            </div>
            <h1>Min</h1>
        </div>

        <div className='time'>
            <div>
                <h1>{second}</h1>
            </div>
            <h1>Sec</h1>
        </div>
    </div>
  )
}
