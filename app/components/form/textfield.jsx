import styles from './textfield.styl';

import React, { PropTypes, Component } from 'react';

export default class Textfield extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dirty: false
    };
  }

  updateState(e) {
    this.setState({ dirty: !!e.target.value });
  }

  updateHeight() {
    var el = this._textarea;
    
    el.style.height = 'auto';
    el.style.height = el.scrollHeight ? el.scrollHeight + 'px' : 'auto';
  }

  render() {
    const labelTextClasses = `${styles.labelText} ${this.state.dirty ? styles.labelTextDirty : ''}`;

    return (
      <div>
        <label className={styles.label}>
          <span className={labelTextClasses}>{this.props.label}</span>
          {this.props.area ? this.renderArea() : this.renderInput()}
        </label>
      </div>
    );
  }

  renderInput() {
    return (
      <input
        className={styles.input} 
        onInput={(e) => this.updateState(e)}
        onFocus={() => this.setState({ dirty: true })}
        onBlur={(e) => this.updateState(e)}
      />
    );
  }

  renderArea() {
    return (
      <textarea
        ref={(c) => this._textarea = c}
        className={`${styles.input} ${styles.textarea}`}
        onInput={(e) => {
          this.updateState(e);
          this.updateHeight();
        }}
        onFocus={() => this.setState({ dirty: true })}
        onBlur={(e) => this.updateState(e)}
      />
    );
  }
}

Textfield.propTypes = {
  label: PropTypes.string.isRequired,
  area: PropTypes.bool
};
