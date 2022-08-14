import { ReactNode } from 'react';

import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
