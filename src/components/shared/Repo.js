export default function Repo(props) {    
    const lang = (language) => {
        if(language){
            return <p className="repo__lang"> {language} </p>
        }
    }

    const date = (date) => {
        return (
            <div className="repo__date">
                <span> Created at: </span>
                <p> {date.split("T")[0]} </p>
            </div>
        ) 
    }

    return (
        <div className="repo">
            <h4> {props.data.name} </h4>
            { date(props.data.created_at)}
            { lang(props.data.language)}
        </div>
    )
}