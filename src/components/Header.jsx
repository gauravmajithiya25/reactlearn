import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1>React Basic</h1>
            <nav className="navbar">
                <ul className="nav-menu">
                    <li>
                        <NavLink to="/" end>Components</NavLink>
                    </li>
                    <li>
                        <NavLink to="/props">Props</NavLink>
                    </li>
                    <li>
                        <NavLink to="/hooks">Hooks</NavLink>
                    </li>
                    <li>
                        <NavLink to="/react-route">React Route</NavLink>
                    </li>
                    <li>
                        <NavLink to="/redux">Redux</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;