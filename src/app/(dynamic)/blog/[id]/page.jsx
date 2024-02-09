import { ClassNames } from '@emotion/react'
import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import { TrendingUpRounded } from '@mui/icons-material'
export default function Blog(){
    return (
        <div className={styles.container}>

            <header className={styles.header}>
                <div className={styles.info}>
                    <h1 className={styles.title}>xx</h1>
                    <p className={styles.docs}>xx</p>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.image}
                        src={"https://images.pexels.com/photos/7869238/pexels-photo-7869238.jpeg"}
                        alt='post image'
                        fill={true}
                    />
                    <span className={styles.auther}>Hasan HAMUI</span>
                </div>
            </header>
            <div className={styles.content}>
                <p className={styles.text}>
                    sdcewsdkfjmkew ewkfjewofk okfpewflp okfewof wkefpoewkf ofkjewofk kjfoewfkjn dfe ef ef rgr ger gter ger ger ger ge wrg rwh wrthg rth sdcewsdkfjmkew ewkfjewofk okfpewflp okfewof wkefpoewkf ofkjewofk kjfoewfkjn dfe ef ef rgr ger gter ger ger ger ge wrg rwh wrthg rth sdcewsdkfjmkew ewkfjewofk okfpewflp okfewof wkefpoewkf ofkjewofk kjfoewfkjn dfe ef ef rgr ger gter ger ger ger ge wrg rwh wrthg rth sdcewsdkfjmkew ewkfjewofk okfpewflp okfewof wkefpoewkf ofkjewofk kjfoewfkjn dfe ef ef rgr ger gter ger ger ger ge wrg rwh wrthg rth sdcewsdkfjmkew ewkfjewofk okfpewflp okfewof wkefpoewkf ofkjewofk kjfoewfkjn dfe ef ef rgr ger gter ger ger ger ge wrg rwh wrthg rth 
                </p>
            </div>
        </div>
    )
}