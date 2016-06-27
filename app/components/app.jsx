import './../frame/index.styl';
import styles from './app.styl';

import React from 'react';
import { Link } from 'react-router';

import Logo from './logo';
import Footer from './footer';
import MainMenuButton from '../connectors/mainMenuButton';
import OpenMenu from '../connectors/openMenu';

const App = ({children}) => {
  return (
    <div>
      <div className={styles.bodyWrapper}>
        <div className={styles.header}>
          <Link to="/"><Logo centered={true} /></Link>
        </div>
        {children}
        <Footer></Footer>
        <OpenMenu />
        <MainMenuButton />
      </div>
    </div>
  );
};

App.propTypes = { children: React.PropTypes.node };

export default App;
