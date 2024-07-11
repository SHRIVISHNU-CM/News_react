import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { SearchContext } from "../ContextAPI/SearchContext"
import axios from "axios"
import Navbar from "./Navbar"

function ReadMore() {
    const { val } = useContext(SearchContext)
    const { id } = useParams()
    const [data, setData] = useState("")
    const [source,setSource] = useState("")
    const api = `https://newsapi.org/v2/everything?q=${val}&pageSize=30&apiKey=604c0d60c734431986504b5a3df037f5`
    useEffect(() => {
        axios.get(api)
            .then((item) => {
                setData(item.data.articles[id])
                setSource(item.data.articles[id].source.name)
                console.log(item.data.articles[id])
                console.log(item.data.articles[id].source.name)


            })

            .catch(e => {
                console.error(e)
            })
    }, [api, id])

    return (
        <>  
            <Navbar/>
            <div className="flex justify-center">
                <img src={data.urlToImage} className="w-[500px] h-[500px]"/>
            </div>
            <p className=" font-cube">{data.description}</p>
            <p className=" font-oswald">{data.content}</p>
            <a href={data.url} target="_blank" className="btn btn-primary">visit Page</a>


        </>
    )
}

export default ReadMore