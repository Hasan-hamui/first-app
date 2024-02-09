import Image from "next/image";
import styles from "./page.module.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MainPage from "/public/images/main.svg"
export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.col}>
        <h1 className={styles.title}>
          Your important step in E-Shopping
          </h1>
        <p className={styles.description}>
          Discover a unique world of the latest and most important products in the world
        </p>
        <button className={styles.button}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
          Shop Now
          <AddShoppingCartIcon style={{ marginLeft: '5px' }}/>
          </span>
        </button>
      </div>
      <div className={styles.col}>
        <Image src={MainPage}  className={styles.img} alt='akilli mavi' />
      </div>
    </div>
  );
}
