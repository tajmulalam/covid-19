import React from 'react'
import {Typography} from '@material-ui/core'
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.container}>
           <Typography color="textSecondary" gutterBottom>2020@Created by Md Tajmul Alam</Typography>
        </div>
    )
}

export default Footer
