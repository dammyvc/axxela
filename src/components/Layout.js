import React from 'react';

const Layout = ({ children, className = '' }) => {
  return (
    <div
      className={`flex relative top-0 m-0 p-0 box-border flex-col w-full z-0 bg-white dark:bg-dark ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
