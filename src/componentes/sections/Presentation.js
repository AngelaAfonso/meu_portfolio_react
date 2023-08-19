import styles from './Presentation.module.css';
import ButtonA from '../elements/ButtonA';
import ButtonB from '../elements/ButtonB';

function Presentation(){
    return(
        <div className={styles.presentation} id="presentation">
            <h4><strong>Bem-vindo(a) ao meu Portfólio</strong></h4>
            <h1>Olá! Eu sou a Angela Afonso</h1>
            <p>
                Sou uma apaixonada por tecnologia e soluções inovadoras. <br />
                Eu tenho o compromisso de resolver problemas <br />
                complexos e trazer resultados excepcionais para os negócios. <br />
                Estou sempre em busca de novos desafios para superar.
            </p>

            <ButtonA text='Conecte-se comigo!' link='https://github.com/AngelaAfonso'/>
        </div>
    )
        
}

export default Presentation