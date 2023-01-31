import styles from './index.module.scss';
import Worker from './example.js?worker';
import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const worker = new Worker();
    const handle = (e: unknown) => {
      console.log(e);
    };
    worker.addEventListener('message', handle);
    return () => {
      console.log(123);
      worker.removeEventListener('message', handle);
    };
  }, []);

  return <p className={styles.header}>This is header</p>;
}
