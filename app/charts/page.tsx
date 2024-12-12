'use client';

import { useRouter } from 'next/navigation';

import styles from '@/app/charts/page.module.scss';
import Button from '@/components/Button/Button';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

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
      <Footer showThemeToggle={false} backgroundColor="#000000" foregroundColor="#dddddd" />
    </div>
  );
};

export default ChartsPage;
