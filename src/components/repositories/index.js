import React from 'react';
import RepositoryItem from '../repository-item';
import * as S from './styled';
const Repositories = () => {
  return (
    <S.WrapperTabs selectedTabClassName='is-selected' selectedTabPanelClassName='is-selected'>
        <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
        </S.WrapperTabList>
        <S.WrapperTabPanel><RepositoryItem name="aula_bootstrap" linkToRepo="https://github.com/joaopedrodcosta01/aula_bootstrap" fullName="joaopedrodcosta01/aula_bootstrap"/></S.WrapperTabPanel>
        <S.WrapperTabPanel><RepositoryItem name="aula_javascript" linkToRepo="https://github.com/joaopedrodcosta01/aula_javascript" fullName="joaopedrodcosta01/aula_javascript" /></S.WrapperTabPanel>
    </S.WrapperTabs>
  )
}

export default Repositories;
