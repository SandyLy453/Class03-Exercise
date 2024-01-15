import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useEffect, useState } from 'react'


export default function ExampleFive () {

    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1)
        }, 1000)

        return () => clearInterval(interval)
}, [count])

    return (
        <>
        <Header/>
        <main>
        <h1>Example 5</h1>

        <p> start counting </p>
        <div styles= {{
            display: "flex",
            margin: "auto",
            textAlign: "center"

        }}>
        {count}
        </div>
        </main>
        <Footer/>
        </>
    )
}
