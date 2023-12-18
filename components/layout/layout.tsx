import React, { ReactNode, useState, useEffect } from 'react';

// Spinner
import { DotLoader } from 'react-spinners';

// component
import Header from '../header';
import Footer from '../footer';
import Content from './content';

interface LayoutProps {
  id: string;
  children: ReactNode;
  style?: string;
}

export default function Layout({ id, children }: LayoutProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation, e.g., fetching data
    const fetchData = async () => {
      // Simulating a delay of 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className='bg-primary'>
      <Header />
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <DotLoader color="#9EB8D9" />
        </div>
      ) : (
        <Content id={id}>
          <div className="min-h-screen md:px-[100px] md:py-[100px]">
            {children}
          </div>
        </Content>
      )}
      <Footer />
    </div>
  );
}
