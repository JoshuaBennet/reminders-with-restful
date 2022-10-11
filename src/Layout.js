import {Outlet, Link} from 'react-router-dom'

const Layout = () => {
        return (
            <>
                <nav>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/add"}>Add</Link>
                </nav>
                <Outlet />
            </>
        )
}

export default Layout