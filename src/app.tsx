import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ConversionWizard from './components/ConversionWizard';

import './app.module.css';

function Main() {
    return <React.Fragment>
      <ConversionWizard title='Stuff' />
    </React.Fragment>;
}

function render() {
  ReactDOM.render(<Main />, document.getElementById('reactApp'))
}

render();