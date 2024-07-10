import { Link } from "react-router-dom"

function ErrPage(){
    return (
        <>  
            <div className="flex items-center h-[50vh]">
                <Link to={`/`} className="btn btn-secondary font-semibold">Go Back</Link>
            </div>

        </>
    )
}

export default ErrPage