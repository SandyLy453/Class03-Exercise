import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useState, useEffect } from 'react'




export default function ExampleOne () {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number)
    })

    return (
        <>
        <Header/>
        <main>
            <h1>Exampe01</h1>
            <div>Infinite Loop</div>
            {number}
        </main>
        <Footer/>
        </>
    )
}