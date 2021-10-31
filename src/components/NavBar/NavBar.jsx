import { NavItems } from "./NavItems";
import './navbar.css'


let NavBar = () => {
    return (
        <>
            <NavItems>
                <div>
                    <p>Site Name</p>
                </div>
                <ul>
                    <li>About Us</li>
                    <li>Prices</li>
                    <li>Start Page</li>
                    <li>Offer</li>
                    <li>Contact</li>
                </ul>

            </NavItems>
        </>
    );
}

export { NavBar }