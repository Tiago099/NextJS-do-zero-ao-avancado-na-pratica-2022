import Head from 'next/head';
import styles from  './styles.module.scss';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import firebase from '../../services/firebaseConnection'
import { useState } from 'react';

import Image from 'next/image';
import rocketImg from '../../../public/images/rocket.svg';

//CLIENT ID = AU5cvZWhr1s-BtCd58mGq6_hMK6EofRJlX5uzf3vj8xJSbSYKS65qPXnm872pbN2Gr1qYtg311H8wB1m
// <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>
interface DonateProps{
 user:{
    nome: string;
    id: string;
    image: string;
 }
}

export default function Donate({user}: DonateProps){
    const [vip, setVip] = useState(false);

   async function handleSaveDonate(){
    await firebase.firestore().collection('user')
    .doc(user.id)
    .set({
        donate: true,
        lastDonate: new Date(),
        image: user.image
    })
    .then(()=>{
        setVip(true);
    })
   }
    
    return(
        <>
          <Head>
            <title>Ajude a plataforma board ficar online!</title>
          </Head>
          <main className={styles.container}>
            <Image src={rocketImg} alt='Seja Apoiador'/>

          {vip && (
            <div className={styles.vip}>
                <Image width={50} height={50} src={user.image} alt='foto do apoiador'/>
                <span>Parabéns você é um novo apoiador!</span>
            </div>
          )}

            <h1>Seja um apoiador deste projeto! 🏆</h1>
            <h3>Contribua com apenas <span>R$ 1,00</span></h3>
            <strong>Apareça na nossa home, tenha funcionalidades exclusivas.</strong>

            <PayPalButtons
              createOrder={ (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount:{
                            value: '1'
                        }

                    }]
                })
               }}
               onApprove={ (data, actions) =>{
                return actions.order.capture().then(function(details){
                    console.log('Compra aprovada:' + details.payer.name.given_name);
                    handleSaveDonate();

                })
               }}
            />
          </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req}) => {
    const session = await getSession({ req })

    if(!session?.id){
        return{
            redirect:{
                destination:'/',
                permanent: false
            }
        }
    }
    const user = {
        nome: session?.user.name,
        id: session?.id,
        image: session?.user.image
    }

    return{
        props:{
            user
        }
    }
}