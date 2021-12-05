import Link from 'next/link';
import styles from './header.module.scss';
import SignInButton from '../SignInButton';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/board">
            <a>Painel de Tarefas</a>
          </Link>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
