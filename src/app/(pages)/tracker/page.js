import React from "react";
import styles from '../../../styles/base.module.scss'
import stylestracker from '../../../styles/tracker.module.scss'
import { createClient } from '@supabase/supabase-js';



export default function Tracker() {
    
    
    
    
    // Initialize Supabase client
const supabase = createClient('https://jxjeqlfbufbmdjgslmwe.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4amVxbGZidWZibWRqZ3NsbXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1MTI5NTUsImV4cCI6MjAzMDA4ODk1NX0.qce3sdc9I2MvkctMx36teygWd-9G1pp27xU8PJfcY_U');

// Fetch data from a table
async function fetchData() {
  try {
    // Specify the table and columns you want to fetch
    const { data, error } = await supabase
      .from('racks')
      .select('*');

    if (error) {
      console.error('Error fetching data:', error.message);
      return;
    }
    let name = data.length;

    // Process the retrieved data
    console.log('Retrieved data:', name);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchData();
 


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
            <section className={stylestracker.trackerSection}>
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