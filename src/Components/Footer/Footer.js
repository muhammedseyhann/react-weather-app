import "./Footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useTheme } from "../../Context/ThemeContext";

function Footer() {
    const { theme } = useTheme();
    return (
        <div className="text-center mt-0">
            <p className="m-0 fs-5">Developed by Muhammed Seyhan</p>
            <a
                href="https://github.com/muhammedseyhann"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className={`bi bi-github me-2 icon-${theme.name}`}></i>
            </a>
            <a
                href="https://www.linkedin.com/in/muhammedseyhann/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className={`bi bi-linkedin ms-2 icon-${theme.name}`}></i>
            </a>
        </div>
    );
}

export default Footer;
