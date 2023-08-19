import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../Images/Projects/lpdnc.svg'

function Projects(){
    return(
        <div className={styles.projects} id="Projects">
            <h1>Projetos</h1>
            <Card
            img={lpdnc}
            title="LP-DNC"
            tech="HTML,CSS e JS"
            description="Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia"
            repo="https://github.com/AngelaAfonso/Projeto---LandingPage"
            site="https://teste-dnc-projetos.netlify.app/"/>
            
        </div>
    )
}

export default Projects