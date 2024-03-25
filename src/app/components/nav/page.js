import React from "react";
import Link from "next/link";
import styles from '../../../styles/base.module.scss'

export default function Nav() {
    return (
        <nav className={styles.backcolor}>
        <h1>Rack Tracker</h1>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/tracker'>Tracker</Link></li>
                <li><Link href='/contact'>Contact Us</Link></li>
                <li><Link href=''>Sign-In</Link></li>
            </ul>
        </nav>
    )

}