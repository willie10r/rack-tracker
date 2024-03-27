import React from "react";
import styles from '../../../styles/base.module.scss'
import stylestracker from '../../../styles/tracker.module.scss'



export default function Tracker() {

    return(
        <main >
            <section>
                <h2 className={stylestracker.statusIndecatorsH}>
                    Status Indecators
                </h2>
                <ul className={[styles.removeDot, styles.paddingRemove, stylestracker.statusIndecators].join(' ')}>
                    <li className={stylestracker.indiText}>
                        <span className={[styles.dot, styles.green, stylestracker.indecators].join(' ')}></span>
                        No wait
                    </li>
                    <li className={stylestracker.indiText}>
                        <span className={[styles.dot, styles.blue, stylestracker.indecators].join(' ')}></span>
                        Small wait
                    </li>
                    <li className={stylestracker.indiText}>
                        <span className={[styles.dot, styles.yellow, stylestracker.indecators].join(' ')}></span>
                        30-60 min wait
                    </li>
                    <li className={stylestracker.indiText}>
                        <span className={[styles.dot, styles.red, stylestracker.indecators].join(' ')}></span>
                        3-4hr wait
                    </li>
                    <li className={stylestracker.indiText}>
                        <span className={[styles.dot, styles.black, stylestracker.indecators].join(' ')}></span>
                        Rack down
                    </li>
                    <li className={stylestracker.indiText}>
                        <span className={[styles.dot, styles.orange, stylestracker.indecators].join(' ')}></span>
                        Out of allocation
                    </li>
                </ul>
            </section>
            <section>
                <h2 className={stylestracker.title}>
                    Status
                </h2>
                <div>
                    <h3 className={stylestracker.rackName}>
                        Kinder Morgan
                    </h3>
                    <ul className={[styles.removeDot, styles.paddingRemove, stylestracker.cardGroup ].join(' ')}>
                        <li className={stylestracker.eachCard}>
                            <div className={stylestracker.candt}>
                            <span className={[styles.dot, styles.green, stylestracker.indiLight].join(' ')}></span>
                                <p className={stylestracker.time}>12:50pm</p>
                                </div>
                            <div className={stylestracker.iandn}>
                                <p className={stylestracker.ini}>WM</p>
                               <p className={stylestracker.note}>This is the notes area</p>
                            </div>
                        </li>
                        <li className={stylestracker.eachCard}>
                            <div className={stylestracker.candt}>
                            <span className={[styles.dot, styles.blue, stylestracker.indiLight].join(' ')}></span>
                                <p className={stylestracker.time}>12:50pm</p>
                                </div>
                            <div className={stylestracker.iandn}>
                                <p className={stylestracker.ini}>WM</p>
                               <p className={stylestracker.note}>This is the notes area</p>
                            </div>
                        </li>
                        <li className={stylestracker.eachCard}>
                            <div className={stylestracker.candt}>
                            <span className={[styles.dot, styles.red, stylestracker.indiLight].join(' ')}></span>
                                <p className={stylestracker.time}>12:50pm</p>
                                </div>
                            <div className={stylestracker.iandn}>
                                <p className={stylestracker.ini}>WM</p>
                               <p className={stylestracker.note}>This is the notes area</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className={stylestracker.rackName}>
                        Magellan
                    </h3>
                    <ul className={[styles.removeDot, styles.paddingRemove, stylestracker.cardGroup ].join(' ')}>
                    <li className={stylestracker.eachCard}>
                            <div className={stylestracker.candt}>
                            <span className={[styles.dot, styles.blue, stylestracker.indiLight].join(' ')}></span>
                                <p className={stylestracker.time}>12:50pm</p>
                                </div>
                            <div className={stylestracker.iandn}>
                                <p className={stylestracker.ini}>WM</p>
                               <p className={stylestracker.note}>This is the notes area</p>
                            </div>
                        </li>
                        <li className={stylestracker.eachCard}>
                            <div className={stylestracker.candt}>
                            <span className={[styles.dot, styles.blue, stylestracker.indiLight].join(' ')}></span>
                                <p className={stylestracker.time}>12:50pm</p>
                                </div>
                            <div className={stylestracker.iandn}>
                                <p className={stylestracker.ini}>WM</p>
                               <p className={stylestracker.note}>This is the notes area</p>
                            </div>
                        </li>
                        <li className={stylestracker.eachCard}>
                            <div className={stylestracker.candt}>
                            <span className={[styles.dot, styles.blue, stylestracker.indiLight].join(' ')}></span>
                                <p className={stylestracker.time}>12:50pm</p>
                                </div>
                            <div className={stylestracker.iandn}>
                                <p className={stylestracker.ini}>WM</p>
                               <p className={stylestracker.note}>This is the notes area</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className={stylestracker.rackName}>
                        U.S. Oil
                    </h3>
                    <ul className={[styles.removeDot, styles.paddingRemove, stylestracker.cardGroup ].join(' ')}>
                    <li className={stylestracker.eachCard}>
                            <div className={stylestracker.candt}>
                            <span className={[styles.dot, styles.blue, stylestracker.indiLight].join(' ')}></span>
                                <p className={stylestracker.time}>12:50pm</p>
                                </div>
                            <div className={stylestracker.iandn}>
                                <p className={stylestracker.ini}>WM</p>
                               <p className={stylestracker.note}>This is the notes area</p>
                            </div>
                        </li>
                        <li className={stylestracker.eachCard}>
                            <div className={stylestracker.candt}>
                            <span className={[styles.dot, styles.blue, stylestracker.indiLight].join(' ')}></span>
                                <p className={stylestracker.time}>12:50pm</p>
                                </div>
                            <div className={stylestracker.iandn}>
                                <p className={stylestracker.ini}>WM</p>
                               <p className={stylestracker.note}>This is the notes area</p>
                            </div>
                        </li>
                        <li className={stylestracker.eachCard}>
                            <div className={stylestracker.candt}>
                            <span className={[styles.dot, styles.blue, stylestracker.indiLight].join(' ')}></span>
                                <p className={stylestracker.time}>12:50pm</p>
                                </div>
                            <div className={stylestracker.iandn}>
                                <p className={stylestracker.ini}>WM</p>
                               <p className={stylestracker.note}>This is the notes area</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className={stylestracker.rackName}>
                        Enterprise
                    </h3>
                    <ul className={[styles.removeDot, styles.paddingRemove, stylestracker.cardGroup ].join(' ')}>
                    <li className={stylestracker.eachCard}>
                            <div className={stylestracker.candt}>
                            <span className={[styles.dot, styles.blue, stylestracker.indiLight].join(' ')}></span>
                                <p className={stylestracker.time}>12:50pm</p>
                                </div>
                            <div className={stylestracker.iandn}>
                                <p className={stylestracker.ini}>WM</p>
                               <p className={stylestracker.note}>This is the notes area</p>
                            </div>
                        </li>
                        <li className={stylestracker.eachCard}>
                            <div className={stylestracker.candt}>
                            <span className={[styles.dot, styles.blue, stylestracker.indiLight].join(' ')}></span>
                                <p className={stylestracker.time}>12:50pm</p>
                                </div>
                            <div className={stylestracker.iandn}>
                                <p className={stylestracker.ini}>WM</p>
                               <p className={stylestracker.note}>This is the notes area</p>
                            </div>
                        </li>
                        <li className={stylestracker.eachCard}>
                            <div className={stylestracker.candt}>
                            <span className={[styles.dot, styles.blue, stylestracker.indiLight].join(' ')}></span>
                                <p className={stylestracker.time}>12:50pm</p>
                                </div>
                            <div className={stylestracker.iandn}>
                                <p className={stylestracker.ini}>WM</p>
                               <p className={stylestracker.note}>This is the notes area</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}