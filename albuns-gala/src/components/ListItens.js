import Modals from "./modal/Modals"


export default function ListItens(props) {
    return (
       <>
       <li onClick={() => console.log(`Você clicou!`)}>
            
           <img
                src={props.ImageInt} 
                alt={props.alt}
                />
           
        </li>
        <Modals isOpen={true}/>
        </>
        

    )
}
