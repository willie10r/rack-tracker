import Image from "next/image";
import styles from '../../../styles/base.module.scss'
import styleshome from '../../../styles/home.module.scss'
import FuelDriver from '../../../../public/images/FuelDriver.jpg'
import TruckatFuelRack from '../../../../public/images/TruckatFuelRack.jpg'

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
      <button className={styleshome.buttonApp}>
        LogIn
      </button>
      <section>
        <Image
          alt="Trck at the fuel rack"
          src={TruckatFuelRack}
          className={styleshome.mainImages}
        />
        <p className={styleshome.SectionText}>
          Truck fueling racks are notorisly unreliable may it be mechanicale breaks or long lines due to
          the flux of fuel prices. A few times a year racks do meter proofing and it slows down the flow of
          traffic in and out of the plant. Knowing when the proofing occurs can help drivers be more productive.
        </p>
      </section>
    </main>
  );
}
