
import styles from './styles.module.scss';
import  { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export function SignInButton(){

    const session = true;

    return session ? (
        <button 
        type="button" 
        className={styles.signInButton}
        onClick={ () => {} }
        >
            <img src='https://sujeitoprogramador.com/steve.png' alt='Foto do usuario'/>
            Olá Tiago
            <FiX color='#737380' className={styles.closeIcons} />      
             
        </button>
    ) : (
        <button 
        type="button" 
        className={styles.signInButton}
        onClick={ () => {} }
        >
            <FaGithub color='#FFB800' />      
             Entra com o github
        </button>
    )
      
}