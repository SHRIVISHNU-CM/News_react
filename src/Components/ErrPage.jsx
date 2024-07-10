import { Link } from "react-router-dom"

function ErrPage(){
    return (
        <>  
            <div>
                <Link to={`/`} className="btn btn-secondary font-semibold">Go Back</Link>
            </div>

        </>
    )
}

export default ErrPage