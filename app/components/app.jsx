import './../frame/index.styl';
import styles from './app.styl';

import React from 'react';
import { Link } from 'react-router';

import Logo from './logo';
import Footer from './footer';
import OpenMenu from '../connectors/openMenu';
import PushableContent from '../connectors/pushableContent';

const App = ({children}) => {
  return (
    <div>
      <div className={styles.bodyWrapper}>
        <div className={styles.header}>
          <Link to="/"><Logo centered={true} /></Link>
        </div>
        <PushableContent content={children} />
        <Footer></Footer>
        <OpenMenu />
      </div>
    </div>
  );
};

App.propTypes = { children: React.PropTypes.node };

export default App;
