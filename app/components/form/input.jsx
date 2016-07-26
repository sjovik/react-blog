import styles from './input.styl';

import classNames from 'classnames'

import React, { PropTypes, Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dirty: false
    };
  }

  render() {
    const labelTextClasses = classNames({
      [`${styles.labelText}`]: true,
      [`${styles.labelTextDirty}`]: this.state.dirty
    });

    return (
      <div>
        <label className={styles.label}>
          <span className={labelTextClasses}>{this.props.label}</span>
          <input 
            className={styles.input} 
            type='text' 
            onFocus={() => this.setState({ dirty: true })}
            onBlur={(e) => (e.target.value) ? null : this.setState({ dirty: false })}
          />
        </label>
      </div>
    );
  }
};

Input.propTypes = {
  label: PropTypes.string.isRequired
};
