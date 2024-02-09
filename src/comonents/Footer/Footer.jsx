import * as React from 'react';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import styles from './footer.module.css'

export default function Footer(){
    return(
        <div className={styles.container}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <CopyrightIcon/>2024 Akilli mavi, All rights reserved   
            </div>
            <div className={styles.social}>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">  
                <FacebookIcon color="primary" className={styles.icon} />
                </Link> 
                <InstagramIcon className={styles.icon} />
                <Link href="https://x.com" target="_blank" rel="noopener noreferrer">
                <XIcon  className={styles.icon} />
                </Link>
                <LinkedInIcon className={styles.icon} />
            </div>
        </div>
    )
}