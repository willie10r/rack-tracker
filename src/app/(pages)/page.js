import Image from "next/image";
import styles from '../../styles/base.module.scss'
import styleshome from '../../styles/home.module.scss'
import FuelDriver from '../../../public/images/FuelDriver.jpg'
import TruckatFuelRack from '../../../public/images/TruckatFuelRack.jpg'
import { login, signup } from './actions'

export default function Home() {
  return (


  
    <main className={styleshome.main}>
      
      <section className={styleshome.mottoWrapper}>
        <h1 className={styleshome.mottoHeader}>
          Rack Tracker
        </h1>
        <p className={styleshome.mottoText}>
          &quot;Reducing down time with driver communicative real-time data.&quot;
          </p>
        <form>
          <div>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required />
          </div>
          <button className={styleshome.buttonApp} formAction={login}>Log in</button>
          <button className={styleshome.buttonApp} formAction={signup}>Sign up</button>
          
        </form>
      </section>
      <section className={styleshome.fisrtSection}>
        <Image
          alt="Guy filling fuel truck"
          src={FuelDriver}
          className={styleshome.mainImages}
        />
        <p className={styleshome.SectionText}>
          Rack Tracker will give your fleet of drivers a way to communicate with other drivers and dispatch
          on the condition and status of the fuel racks. No longer will you have to wonder if a rack is busy
          or down. They will not have to call each other one by one or hope dispatch relays the information in a 
          timely manner. The software will take each drivers input and distribute it instantly for all drivers
          to see. The more drivers use the app the more up to date and accurate your fleet can stay.
        </p>
      </section>
     
    </main>
  );
}
