import Link from "next/link" 
import styles from "./logo.module.css"

import { Montserrat } from "next/font/google"
const logoFont = Montserrat({
    subsets: ['latin'],
    weight: ['600']
})

export default function Logo(){
    return (
        <Link href="/" className={`${styles.log} ${logoFont.className}`}>
            Akilli Mavi
        </Link>

    )
}