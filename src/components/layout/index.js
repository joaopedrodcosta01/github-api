import React from 'react';
import * as S from './styled.js';

const Layout =({ children }) => {
  return (
    <S.WrapperLayout>
        <header>header</header>
        {children}
    </S.WrapperLayout>
  );
};

export default Layout;