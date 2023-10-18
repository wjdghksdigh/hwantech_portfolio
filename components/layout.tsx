
import React, { ReactNode } from 'react';

//component
import Header from './header';
import Footer from './footer';
// import Main from './main';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}