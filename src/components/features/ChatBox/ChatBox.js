import React from 'react';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ChatBox.module.scss';
import { faShare, faHeadset, faComments } from '@fortawesome/free-solid-svg-icons';

class ChatBox extends React.Component {
  state = {
    visible: false,
  };

  handleClick = event => {
    event.preventDefault();
    if (this.state.visible === false) {
      this.setState({
        visible: true,
      });
    } else {
      this.setState({
        visible: false,
      });
    }
  };

  render() {
    return (
      <div className={styles.root}>
        <div className={this.state.visible === true ? styles.slideOn : styles.slideOff}>
          <div className={styles.box}>
            <div className={styles.background}>
              <FontAwesomeIcon icon={faHeadset} className={styles.icon} />
              <div className={styles.message}>
                <p>How can I help you?</p>
              </div>
            </div>
          </div>
          <div className={styles.chat}>
            <form>
              <textarea></textarea>
              <div className={styles.iconCont}>
                <FontAwesomeIcon icon={faShare} />
              </div>
            </form>
          </div>
        </div>
        <Button variant='outline' className={styles.button} onClick={this.handleClick}>
          <FontAwesomeIcon icon={faComments} /> If you need help, write us!
        </Button>
      </div>
    );
  }
}

export default ChatBox;
