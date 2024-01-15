import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useEffect, useState } from 'react'


export default function ExampleThree () {

    const [number, setNumber] = useState(0);

    const color = ["red", "orange", "yellow", "green", "blue", "violet"];

    useEffect(() => {
        if (number > color.length - 1) {
            setNumber(0)
            console.log("Changinf number value back to 0" + color[0])
        } else {
        console.log("Changin number value: " + color[number]);
    }}, [number]) 

    return (
        <>
        <Header/>
        <main>
            <h1>Example 3</h1>
            <button style={{backgroundColor: color[number]}} 
            onClick={() => setNumber(number + 1)}>
                Incresement number
            </button>
            <div>
                {number}
            </div>
        </main>
        <Footer/>
        </>
    )
}

