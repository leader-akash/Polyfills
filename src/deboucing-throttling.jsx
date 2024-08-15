// import { debounce, throttle } from "lodash";
import { useCallback, useState } from "react"


export const DebounceThrottling = () => {

    const [btnPressed, setBtnPressed] = useState(0);
    const [btnTriggered, setBtnTriggered] = useState(0);


    // const debounceBtnTriggered =  useCallback(
    //     debounce(() => {
    //         setBtnTriggered(prev => prev + 1);
    //     }, 1000),
    //     [])

    // const throttleBtnTriggered =
    // useCallback(
    //     throttle(() => {
    //         setBtnTriggered(prev => prev + 1);
    //     }, 1000),
    // [])

    const myDebounce = (cb, delay) => {
        let timer;

        return function (...args) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                cb(...args)
            }, delay)
        }
    }

    const myThrottle = (cb, delay) => {
        let last = 0;

        return function (...args) {
            let currentTime = new Date().getTime();

            if (currentTime - last < delay) return;

            last = currentTime;

            return cb(...args)
        }
    }

    

    // 9779367655   --- Falguni arora


    // 9309001500 --- nikita pant

    //     const customDebouncefunction = useCallback( 
    //         myDebounce(() => {
    //         setBtnTriggered(btnTriggered+1)
    //     }, 1000),
    //     []
    // )

    const customThrottleFunc = useCallback(
        myThrottle(() => {
            setBtnTriggered(btnTriggered + 1)
        }, 1000),
        []
    )   

    const handleIncrement = () => {
        setBtnPressed(btnPressed + 1);
        // debounceBtnTriggered();
        // throttleBtnTriggered();

        // customDebouncefunction();
        customThrottleFunc();
    }

    return (
        <div>

            <button onClick={handleIncrement}> Increment </button>

            <p> Button pressed <span>{btnPressed}</span> times</p>
            <p> Button Triggered <span>{btnTriggered}</span> times</p>


        </div>
    )
}