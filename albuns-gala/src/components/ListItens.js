import Modals from "./modal/Modals"
import React, { useState } from "react"



export default function ListItens(props) {
    
    
    
    const [openModal, setOpenModal] = useState(false)
    
    return (
       <>
       <li onClick={() => setOpenModal(true)}>
           
           <img
                src={props.ImageInt} 
                alt={props.alt}
                
                />
           
        </li>
        
        
        
        
        
        </>
        

    )
}
