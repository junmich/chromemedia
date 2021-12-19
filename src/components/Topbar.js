import React from 'react';
import {  Icon, Input, Menu } from 'semantic-ui-react'

const Topbar = ({ results, filterStar, filterHeart }) => {
    return (
        <Menu size="large">
        <Menu.Item>
          <span style={{ marginRight: 5 }}>Filter</span>
          <Icon name="heart" onClick={filterHeart} color="red" size='large'/>
          <Icon name="star" onClick={filterStar} color="yellow" size='large' />

        </Menu.Item>
    
        <Menu.Item>
            <Input iconPosition='left' placeholder='Search...'>
                <Icon name='search' />
                <input />
            </Input>
        </Menu.Item>

        <Menu.Item position='right'>
          Results {results}
        </Menu.Item>
      </Menu>
    );
}

export default Topbar;
