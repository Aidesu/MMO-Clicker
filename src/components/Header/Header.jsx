import { Link } from "react-router";

export default function Header() {
    return (
        <header>
            <nav>
                <h2>MMO-Clicker</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/maps">Maps</Link>
                    </li>
                    <li>
                        <Link to="/dungeon">Dungeon</Link>
                    </li>
                    <li>
                        <Link to="/village">Village</Link>
                    </li>
                    <li>
                        <Link to="/bestiary">Bestiary</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
