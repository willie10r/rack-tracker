import React from "react";
import styles from '../../../styles/base.module.scss'



export default function Tracker() {

    return(
        <main >
            <section>
                <h2>
                    Status
                </h2>
                <ul className={styles.removeDot}>
                    <li>
                        <span className={styles.dot}></span>
                        No wait
                    </li>
                    <li>
                        <span className={styles.dot}></span>
                        Small wait
                    </li>
                    <li>
                        <span className={styles.dot}></span>
                        30-60 min wait
                    </li>
                    <li>
                        <span className={styles.dot}></span>
                        3-4hr wait
                    </li>
                    <li>
                        <span className={styles.dot}></span>
                        Rack down
                    </li>
                    <li>
                        <span className={styles.dot}></span>
                        Out of allocation
                    </li>
                </ul>
            </section>
            <section>
                <h2>
                    Status
                </h2>
                <div>
                    <h3>
                        Kinder Morgan
                    </h3>
                    <ul>
                        <li>
                            <div>
                            <span className={styles.dot}></span>
                                <p>12:50pm</p>
                                </div>
                            <div>
                                <p>WM</p>
                                <input></input>
                            </div>
                        </li>
                        <li>
                            <div>
                            <span className={styles.dot}></span>
                                <p>12:50pm</p>
                                </div>
                            <div>
                                <p>WM</p>
                                <input></input>
                            </div>
                        </li>
                        <li>
                            <div>
                            <span className={styles.dot}></span>
                                <p>12:50pm</p>
                                </div>
                            <div>
                                <p>WM</p>
                                <input></input>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>
                        Magellan
                    </h3>
                    <ul>
                    <li>
                            <div>
                            <span className={styles.dot}></span>
                                <p>12:50pm</p>
                                </div>
                            <div>
                                <p>WM</p>
                                <input></input>
                            </div>
                        </li>
                        <li>
                            <div>
                            <span className={styles.dot}></span>
                                <p>12:50pm</p>
                                </div>
                            <div>
                                <p>WM</p>
                                <input></input>
                            </div>
                        </li>
                        <li>
                            <div>
                            <span className={styles.dot}></span>
                                <p>12:50pm</p>
                                </div>
                            <div>
                                <p>WM</p>
                                <input></input>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>
                        U.S. Oil
                    </h3>
                    <ul>
                    <li>
                            <div>
                            <span className={styles.dot}></span>
                                <p>12:50pm</p>
                                </div>
                            <div>
                                <p>WM</p>
                                <input></input>
                            </div>
                        </li>
                        <li>
                            <div>
                            <span className={styles.dot}></span>
                                <p>12:50pm</p>
                                </div>
                            <div>
                                <p>WM</p>
                                <input></input>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>
                        Enterprise
                    </h3>
                    <ul>
                    <li>
                            <div>
                            <span className={styles.dot}></span>
                                <p>12:50pm</p>
                                </div>
                            <div>
                                <p>WM</p>
                                <input></input>
                            </div>
                        </li>
                        <li>
                            <div>
                            <span className={styles.dot}></span>
                                <p>12:50pm</p>
                                </div>
                            <div>
                                <p>WM</p>
                                <input></input>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}