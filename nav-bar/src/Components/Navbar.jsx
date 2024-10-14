import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <>
            <header>
                <div className='container'>
                    <nav>
                        <div className="logo">
                            <h2>NAV-BAR</h2>
                        </div>
                        <ul className={isOpen ? "nav-link active" : "nav-link"}>
                            <li><a href="/home" className="active">Home</a></li>
                            <li><a href="/About">About</a></li>
                            <li><a href="/Services">Services</a></li>
                            <li><a href="/Contact">Contact</a></li>
                        </ul>
                        <div className="icon" onClick={toggleMenu}>
                            <i className='bx bx-menu'></i>
                        </div>
                    </nav>
                </div>
            </header>
            <section>
                <div className="container">
                    <div className="content">
                        <h2>RESPONSIVE NAVBAR</h2>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Navbar;
