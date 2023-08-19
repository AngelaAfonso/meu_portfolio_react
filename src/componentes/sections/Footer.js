import styles from './Footer.module.css'
import { FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a></a><FaInstagram size={30}/></li>
                <li><a href="https://www.linkedin.com/in/angela-afonso-862007281/"><FaLinkedin size={30}/></a></li>
                <li><a href="https://github.com/AngelaAfonso"><FaGithub size={30}/></a></li>
            </ul>
            <p>angelareisafo2020@gmail.com </p>
            <p>Angela Afonso © 2023</p>
        </div>
    )
}

export default Footer