import { useEffect, useState } from "react"
import Repo from "./shared/Repo";
import Spinner from "./ui/Spinner"

export default function Repos({searchValue, starred}) {
    const [loader, setLoader] = useState(false);
    const [repos, setRepos] = useState([]);
    const url = starred ? `https://api.github.com/users/${searchValue}/starred` : `https://api.github.com/users/${searchValue}/repos?per_page=50`

    useEffect( () => {
        if(searchValue){
            setLoader(true);
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setRepos(data)
                    setLoader(false);
                })
        }
    }, [searchValue])


    return (
        <div className="box">
            <h3 className="box__title"> { starred ? "Starred Repos" : "Repos" } </h3>
            {loader && <Spinner ></Spinner>}
            { repos.length > 0 && repos.map((repo) => {
                // return <p> {repo.name}</p>
                return <Repo data={repo} key={repo.id}></Repo>
            })}
            { repos.length == 0 && searchValue && !loader && <p className="error"> Data not found! </p>}
        </div>
    )
}