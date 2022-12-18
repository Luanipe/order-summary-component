import Image from 'next/image';
import styles from '../styles/OrderSummary.module.scss'

export default function OrderSummary() {
    return (
        <div className={styles.component}>
            <Image 
                alt="illustration-hero"  
                src="/images/illustration-hero.svg" 
                width="450" 
                height="220"
                className={styles.musicImage}
            />

            <div className={styles.content}>
                <h1>Order Summary</h1>
                
                <p>
                    You can now listen to millions of songs,<br></br>
                    audiobooks, and podcasts on any device<br></br>
                    anywhere you like!
                </p>

                <div className={styles.planContainer}>
                    <div className={styles.plan}>
                        <Image
                            alt="icon-music"
                            src="/images/icon-music.svg"
                            width="48"
                            height="48"
                            style={{ marginRight: "10%" }}
                        />
                        
                        <div className={styles.planInfos}>
                            <span className={styles.planType}>Annual Plan</span>
                         
                            <span className={styles.planPrice}>$59.99/year</span>
                        </div>
                    </div>

                    <button className={styles.changeButton}>Change</button>
                </div>

                <button className={styles.submitButton}>Proceed to Payment</button>

                <button className={styles.cancelButton}>Cancel Order</button>
            </div>
        </div>
    )
}
