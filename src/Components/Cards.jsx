import { useContext, useEffect, useState } from "react"
import axios from "axios"
import image from "../Image/no image.jpg"
import { Link } from "react-router-dom"
import { SearchContext } from "../ContextAPI/SearchContext"
import ErrPage from "./ErrPage"
function Cards() {
    const [data, setData] = useState([])
    const { val } = useContext(SearchContext)
    const [err, SetErr] = useState("")
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=${val}&pageSize=30&apiKey=604c0d60c734431986504b5a3df037f5`)
            .then((item) => {
                setData(item.data.articles)
                console.log(item.data)
                console.log(item.data.articles[2])
            })
            .catch((e) => {
                SetErr(e)
            })
    }, [])
    return (
        <>
            <div className="flex flex-wrap gap-6 justify-center md:flex md:justify-around">
                {
                    err ? <ErrPage /> : data.map((itme, key) => {
                        return (

                            <div key={key} className="card bg-base-200 w-[400px] md:w-96 shadow-xl border-spacing-3">
                                <div className="card ">
                                    {itme.urlToImage ?
                                        <img src={itme.urlToImage} className="w-[400px] h-[300px] bg-slate-500 " /> :
                                        <img src={image} />
                                    }
                                    <h1 className="card-title font-body">{itme.title}</h1>
                                    <div className="flex items-center gap-x-6">
                                        {itme.author ?
                                            <div className="badge badge-outline  m-2 h-min">
                                                {itme.author}
                                            </div> : null
                                        }
                                    </div>
                                    <div className="absolute m-1 right-0">
                                        <Link to={`/news/${key}`} className="btn ">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Cards