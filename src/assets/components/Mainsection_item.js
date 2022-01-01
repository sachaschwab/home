export default function Mainsection_item(props) {
    return(
        <div className="Mainsection-item">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <a href={props.url}>Go to Github repo</a>
        </div>
    )
}