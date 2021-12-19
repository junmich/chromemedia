import React from 'react';
import { Header } from 'semantic-ui-react'

const AppHeader = ({title}) => {
    return <Header className="title-header" as="h1" textAlign="center">{title}</Header>
}

export default AppHeader;
