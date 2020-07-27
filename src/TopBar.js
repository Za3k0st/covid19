import React from 'react';

import { Dropdown } from '@liquid-design/liquid-design-react';

import logo from './logo.svg';

function TopBar() {
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
      <Dropdown
        label='Dropdown label'
        options={[
          {
            "id": "1",
            "name": "test",
          },
        ]}
      />
    </header>)
}

export default TopBar;
