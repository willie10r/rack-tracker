import React from "react";
import Link from "next/link";
import styles from '../../../styles/base.module.scss'
import stylesNav from '../../../styles/nav.module.scss'

export default function Nav() {
    return (
        <nav className={stylesNav.navbase}>
        <h1 className={stylesNav.navtitle}>Rack Tracker</h1>
            <ul className={[styles.removeDot, stylesNav.navbase, stylesNav.navwrapper].join(' ')}>
                <li className={stylesNav.navbuttons}><Link href='/'>Home</Link></li>
                <li className={stylesNav.navbuttons}><Link href='/tracker'>Tracker</Link></li>
                <li className={stylesNav.navbuttons}><Link href='/contact'>Contact Us</Link></li>
                <li className={stylesNav.navbuttons}><Link href=''>Sign-In</Link></li>
            </ul>
        </nav>
    )

}