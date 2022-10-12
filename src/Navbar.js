import './Navbar.css'
import FontContext from "./FontContext";
return (
    <FontContext.Consumer>
        {contextData => (
            <nav>
                <h1>Reminders</h1>
            </nav>
        )}
    </FontContext.Consumer>
)
}
const Navbar = () => {


export default Navbar
