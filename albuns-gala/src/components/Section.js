export default function Section(props) {
    return (
        <section>
        <div>
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
            <ul className="albuns">
              {/* Itens da Lista */}
               {props.children} 
            </ul>
        </div>
    </section>     
    )
}