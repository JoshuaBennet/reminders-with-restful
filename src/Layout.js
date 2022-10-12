import {Outlet, Link} from 'react-router-dom'
import FontContext from "./FontContext";
import "./Navbar.css"

const Layout = () => {
        return (
            <FontContext.Consumer>
                {contextData => (
            <>
                <nav className={contextData.currentFont}>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/add"}>Add</Link>
                </nav>
                <Outlet />
            </>
                )}
            </FontContext.Consumer>
        )
}

export default Layout

