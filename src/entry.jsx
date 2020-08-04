import React, { Component } from 'react';
import {render} from 'react-dom';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

render(<Component1 />, document.getElementById('component_1'));
render(<Component2 />, document.getElementById('component_2'));
