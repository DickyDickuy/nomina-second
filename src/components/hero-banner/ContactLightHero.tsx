import React from 'react';
import styles from './LightPageHero.module.css';

const ContactLightHero = () => {
    return (
        <div
            className={styles.heroSection}
            style={{
                backgroundImage: "url('/assets/img/about-us/about-us-4/about-us-4-bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className={styles.scrollTextContainer}>
                <span className={`${styles.scrollText} ${styles.scrollTextDown}`}>
                    scroll down to see
                </span>
            </div>
            <h1 className={styles.heroTitle}>cOntact</h1>
        </div>
    );
};

export default ContactLightHero;
