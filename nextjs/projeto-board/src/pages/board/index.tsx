import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';


import styles from  './style.module.scss';
import { FiCalendar, FiClock, FiEdit, FiPlus, FiTrash } from 'react-icons/fi';
import { SupportButtom } from '../../components/SupportButtom';


export default function Board(){
    return(
        <>
    <Head>
        <title>Minhas tarefas - Board</title>
    </Head>
    <main className={styles.container}>
        <form>
            <input
            type='text'
            placeholder='Digite sua tarefa...'
            />
            <button type='submit'>
                <FiPlus size={25} color="#17181f" />
            </button>
        </form>
        <h1>Você tem 2 tarefas!</h1>

<section>
<article className={styles.taskList}>
    <p>Aprender criar projetos usando Next Js e aplicando firebase como back.</p>
    <div className={styles.actions}>
     <div>
        <div>
            <FiCalendar size={20} color="#FFB800"/>
            <time>17 Julho 2022</time>
        </div>
        <button>
            <FiEdit size={20} color="#FFF"/>
            <span>Editar</span>
        </button>
        </div>

        <button>
            <FiTrash size={20} color="#FF3636"/>
            <span>Excluir</span>
        </button>
        </div>
    </article>
</section>

</main>

    <div className={styles.vipContainer}>
        <h3>Obrigado por apoia esse projeto.</h3>
        <div>
            <FiClock size={28} color="#FFF" />
            <time>
                Última doação foi a 3 dias.
            </time>
        </div>
    </div>
      
    <SupportButtom/>
     
    </>

    )
}

export const getServerSideProps: GetServerSideProps = async ({req}) => {
  const session = await getSession({ req });
  
  if(!session?.id){
    //Se o user nao tiver logado vamos redirecionar.
    return{
        redirect:{
         destination:'/',
         permanent:false
        }
    }
  }
 return{
    props:{

    }
 }
} 