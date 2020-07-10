import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';




class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    imageSource: PropTypes.string.isRequired,
    children: PropTypes.node,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }


  render() {
    return (
        <section id="list" className={styles.component}>
          <Hero titleText={this.props.title} imageSourceText={this.props.imageSource} />
          <div className={styles.description}>
            {this.props.children}
          </div>
          <div className={styles.columns}>
            <Column titleText={['Animals']}></Column>
            <Column titleText={['Plants']}></Column>
            <Column titleText={['Minerals']}></Column>
          </div>
        </section>
    )
  }
}

export default List;
