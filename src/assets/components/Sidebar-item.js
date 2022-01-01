export default function Sidebar_item(props) {
    return(
        <div className="Sidebar-item">
            <h2>{props.title}</h2>
            <a href={props.url}>Read more</a>
        </div>
    )
}