import React from 'react'
import styles from './Modals.module.css'

function Modals({isOpen}, {props}) {
    
     
    
    if(isOpen) {
        return (
            
        <div className={styles.ModalFundo}>
            <div className={styles.ModalBackground}>
                <h2 className={styles.tituloTest}>
                    {props.titAlbum}
                </h2>
                <p>
                    {props.resenha}
                </p>
            </div>
        </div>
        )
     }
     return null
    
}

export default Modals