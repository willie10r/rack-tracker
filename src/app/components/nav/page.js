import React from "react";
import Link from "next/link";
import styles from '../../../styles/base.module.scss'
import stylesNav from '../../../styles/nav.module.scss'

export default function Nav() {
    return (
        <nav className={[stylesNav.navBase, stylesNav.stickyNav].join(' ')}>
        <h1 className={stylesNav.navTitle}>Rack Tracker</h1>
            <ul className={[styles.removeDot, stylesNav.navBase, stylesNav.navWrapper].join(' ')}>
                <li className={stylesNav.navButtons}><Link href='/'>Home</Link></li>
                <li className={stylesNav.navButtons}><Link href='/tracker'>Tracker</Link></li>
                <li className={stylesNav.navButtons}><Link href='/contact'>Contact Us</Link></li>
                <li className={stylesNav.navButtons}><Link href=''>Sign-In</Link></li>
            </ul>
        </nav>
    )

} 