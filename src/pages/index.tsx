import type { GetStaticProps, NextPage } from 'next';
import styles from '../styles/home.module.scss';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Board - Organizandor de tarefas</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.callToAction}>
          <h1>
            Uma ferramenta para seu dia a dia. Escreva planeje e organize-se,
            Faça login com seu GitHub para usa-lá
            <p>
              <span>100% Gratuito</span> e online.
            </p>
          </h1>
        </section>
        <div className={styles.donators}></div>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60, //atualiza a cada 60 minutos
  };
};
