import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
    <>
        <header className={`${
        isSticky ? 'sticky top-0 shadow-lg bg-white text-black' : 'bg-white text-black'
      } transition-all duration-300 ease-in-out`}>
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="flex items-center">
                    <NavLink to="/">
                    <img src="/src/assets/logo/WebApplogo.png" alt="Logo" className="w-44 h-12 mr-2" />
                    </NavLink>
                </div>

                {/* Menu */}
                <nav>
                <ul className="flex space-x-4">
                    <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
                    <li className="nav-item"><NavLink to="/services" className="nav-link">Services</NavLink></li>
                    <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                    <li className="nav-item"><NavLink to="/register" className="nav-link">Register</NavLink></li>
                    <li className="nav-item"><NavLink to="/login" className="nav-link">Login</NavLink></li>
                </ul>
                </nav>
            </div>
        </header>

    </>
    );
}

export default Navbar;