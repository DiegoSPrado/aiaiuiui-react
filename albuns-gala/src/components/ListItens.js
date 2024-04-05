export default function ListItens(props) {
    return (
        <li>
            <a target="_blank" rel="noreferrer" href={props.url}
            > 
           <img
                src={props.ImageInt} 
                alt={props.alt}
                />
            </a>
        </li>
    )
}