import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID. THE PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            R#5, Banasree, Rampura.
            <br /> Dhaka, 1200
            <br /> (880) 167-1010
          </p>
          <p className={styles.text}>
            R#1, Block: K, Mirpur.
            <br /> Dhaka, 1210
            <br /> (880) 167-7810
          </p>
          <p className={styles.text}>
            R#4, Khilkhet.
            <br /> Dhaka, 1100
            <br /> (880) 167-1012
          </p>
          <p className={styles.text}>
            R#5, Block: L, Khilgaon.
            <br /> Dhaka, 1180
            <br /> (880) 167-1033
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
