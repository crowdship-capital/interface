import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

const Body = ({ children }: { children: ReactNode }) => {
  const { pathname } = useRouter();

  const showComponent = (paths: string[]) => !paths.includes(pathname);

  const pathsWithoutHeaderAndFooter = [
    '/create-demo',
    '/launch-campaign',
    '/_error',
  ];

  return (
    <main>
      {showComponent(pathsWithoutHeaderAndFooter) && <Header />}
      {children}
      {showComponent(pathsWithoutHeaderAndFooter) && <Footer />}
    </main>
  );
};

export default Body;
