import React from 'react';
import { Dropdown, ButtonToolbar } from 'rsuite';

const Settings = () => {
  return (
    <div className='rs-theme-dark'>
      <ButtonToolbar>
        <Dropdown title="Dropdown" placement="leftStart">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Menu title="Right Item 2">
            <Dropdown.Item>Item 2-1</Dropdown.Item>
            <Dropdown.Item>Item 2-2</Dropdown.Item>
            <Dropdown.Item>Item 2-3</Dropdown.Item>
          </Dropdown.Menu>
          <Dropdown.Menu title="Left Item 3">

            <Dropdown.Item>Item 3-2</Dropdown.Item>
            <Dropdown.Item>Item 3-3</Dropdown.Item>
          </Dropdown.Menu>
          <Dropdown.Item>Item 4</Dropdown.Item>
          <Dropdown.Item>Item 5</Dropdown.Item>
          <Dropdown.Item>Item 6</Dropdown.Item>
        </Dropdown>
      </ButtonToolbar>
    </div>
  );
};

export default Settings;
