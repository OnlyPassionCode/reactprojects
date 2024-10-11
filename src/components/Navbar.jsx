import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/todolist">ToDoList</Link></li>
                <li><Link to="/505055">505055</Link></li>
            </ul>
        </nav>
        <hr />
        </>
    );
}

export default Navbar;