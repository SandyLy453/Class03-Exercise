import styles from './Header.module.css'
import Link from 'next/link'

export default function Header () {
    return (
        <>
        <h1>Header here</h1>
        <Link href={'/'}>Home</Link>
        </>
    )
}



