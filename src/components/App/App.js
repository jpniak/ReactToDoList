import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData} from '../../data/dataStore';


class App extends React.Component {
  render() {
    console.log('Page contents: ', pageContents);
    return (
      <div id="app">
        <main className={styles.component}>
          <h1 className={styles.title}>My first React app</h1>
          <h2 className={styles.subtitle}>Hello world!</h2>
          <List {...listData} />
        </main>
      </div>
    );
    

  }
}

export default App;
