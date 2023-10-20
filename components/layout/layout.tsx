import React, { ReactNode } from 'react';

//component
import Header from '../header';
import Footer from '../footer';
import Content from './content';

interface LayoutProps {
  id: string;
  children: React.ReactNode;
  style?: string;
}

export default function Layout({  id, children }: LayoutProps) {
  return (
    <div className='bg-primary'>
      <Header />
      <Content id={id}>
        <div className="min-h-screen px-[100px] py-[100px]">
        {children}
        </div>
      </Content>
      <Footer />
    </div>
  );
}