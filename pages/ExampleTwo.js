import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useEffect } from 'react'


export default function ExampleTwo () {
    
    // [] make sure the effect only run once
    useEffect (() => {
        console.log("RUN")
    }, [])
    
    return (
        <>
        <Header/>
        <main>
            <h1>Example 2</h1>
        </main>
        <Footer/>
        </>
    )
}