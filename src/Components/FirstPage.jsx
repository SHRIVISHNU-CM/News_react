import { useContext } from "react"
import Navbar from "./Navbar"
import { SearchContext } from "../ContextAPI/SearchContext"
import { useNavigate } from "react-router-dom"

function FirstPage() {
    const { val, SetVal } = useContext(SearchContext)
    const navigate = useNavigate()
    const HandleSubmit = (e) => {
        e.preventDefault()
        navigate('/home')
    }
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center h-96">
                <div className="card bg-base-200 w-96 md:w-[600px]">
                    <h1 className=" font-playwrite p-3">What's Special News</h1>
                    <div className="card-body">
                        <form onSubmit={HandleSubmit}>
                            <input
                                type="text"
                                value={val}
                                onChange={e => SetVal(e.target.value)}
                                placeholder="Enter News"
                                className="input input-bordered md:w-96 mx-1"
                            />
                            <button type="submit" className="btn btn-primary">Go</button>
                        </form>

                        <div className="card-actions justify-start">
                            <h1 className="badge badge-border">bitcoin</h1>
                            <h1 className="badge badge-border">technology</h1>
                            <h1 className="badge badge-border">science</h1>
                            <h1 className="badge badge-border">trading</h1>
                            <h1 className="badge badge-border">startup</h1>
                            <h1 className="badge badge-border">India</h1>
                            <h1 className="badge badge-border">USA</h1>
                            <h1 className="badge badge-border">Cricket</h1>
                            <h1 className="badge badge-border">sports</h1>
                            <h1 className="badge badge-border">football</h1>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default FirstPage
