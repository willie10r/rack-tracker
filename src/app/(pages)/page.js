import Image from "next/image";
import styles from '../../styles/base.module.scss'
import FuelDriver from '../../../public/images/FuelDriver.jpg'
import TruckatFuelRack from '../../../public/images/TruckatFuelRack.jpg'

export default function Home() {
  return (
    <main>
      <section>
        <h1>
          Rack Tracker
          </h1>
        <p>
          Reducing down time with driver communicative real-time data.
          </p>
      </section>
      <section>
        <Image
          alt="Guy filling fuel truck"
          src={FuelDriver}
          
        />
        <p>
          Rack Tracker will give your fleet of drivers a way to communicate with other drivers and dispatch
          on the condition and status of the fuel racks. No longer will you have to wonder if a rack is busy
          or down. They will not have to call each other one by one or hope dispatch relays the information in a 
          timely manner. The software will take each drivers input and distribute it instantly for all drivers
          to see. The more drivers use the app the more up to date and accurate your fleet can stay.
        </p>
      </section>
      <button>
        Rack Tracker app
      </button>
      <section>
        <Image
          alt="Trck at the fuel rack"
          src={TruckatFuelRack}
        />
        <p>
          Truck fueling racks are notorisly unreliable may it be mechanicale breaks or long lines due to
          the flux of fuel prices. A few times a year racks do meter proofing and it slows down the flow of
          traffic in and out of the plant. Knowing when the proofing occurs can help drivers be more productive.
        </p>
      </section>
    </main>
  );
}
