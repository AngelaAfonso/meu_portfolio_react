import javascript from '../../Images/Skills/javascript.svg'
import css from '../../Images/Skills/css.svg'
import html from '../../Images/Skills/html.svg'
import typescript from '../../Images/Skills/typescript.svg'
import react from '../../Images/Skills/react.svg'
import styles from './Skills.module.css'

function Skills(){
    return(
        <div className={styles.skill} id="Skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript}></img>
                <img src={css}></img>
                <img src={html}></img>
                <img src={typescript}></img>
                <img src={react}></img>
            </div>
        </div>
    )
}

export default Skills