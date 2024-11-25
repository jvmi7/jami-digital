'use client';

import { useRouter } from 'next/navigation';

import styles from '@/app/charts/page.module.scss';
import { Header } from '@/components/Header/Header';
import Button from '@/components/Button/Button';

const ChartsPage = () => {
  const router = useRouter();
  return (
    <div>
      <Header theme="DARK" />
      <div className={styles.container}>
        <p>coming soon.</p>
        <Button variant="primary" onClick={() => router.push('/')}>
          back to home
        </Button>
      </div>
    </div>
  );
};

export default ChartsPage;
