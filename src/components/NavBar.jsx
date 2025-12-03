import {navLinks} from "../constants";

const NavBar = () => {
    return (
        <header>
            <nav className="px-2 lg:px-20">
                <img src="/product-site-demo/logo.png" alt="Logo" />

                <ul>
                    {navLinks.map(({ label }) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <button>
                        <img src="/product-site-demo/search.svg" alt="Search" />
                    </button>
                    <button>
                        <img src="/product-site-demo/cart.svg" alt="Cart" />
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar
