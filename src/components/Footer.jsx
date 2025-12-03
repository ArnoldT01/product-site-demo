import {footerLinks} from "../constants/index.js";

const Footer = () => {
    return (
        <footer>

            <hr/>
            
            <div className="links px-2 lg:px-20">
                <p>Copyright © 2025 <a href="https://arnoldt01.github.io">Arnold Mavhunga</a>. All rights reserved.</p>

                <ul>
                    {footerLinks.map(({label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer
