import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';

import '../styles/main.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: props.active
    }

    this.onClose = this.onClose.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      active: nextProps.active
    });
  }

  onClose() {
    this.setState({active: false});
  }

  onConfirm() {
    this.props.onConfirm();
  }

  render() {
    const {
      footer,
      header,
      children,
      onCancel,
      onConfirm,
      customeCloseButton,
      clickBackGroundClose,
      top,
      left,
      buttonPosition
    } = this.props;

    if(!this.state.active) {
      return null;
    }

    const numberOfTop = isNaN(parseInt(top)) ? 50 : parseInt(top);
    const numberOfLeft = isNaN(parseInt(left)) ? 50 : parseInt(left);

    const modalContainerStyle = {
      top: numberOfTop + '%',
      left: numberOfLeft + '%',
      transform: 'translate(-' + numberOfTop + '%,-' + numberOfLeft + '%)'
    }

    return (
      <div>
        <div className='modalBackground' onClick={clickBackGroundClose ? this.onClose : () => {}}></div>
        <div className='modalContainer' style={modalContainerStyle}>
          <Header onClose={this.onClose} customeCloseButton={customeCloseButton}  />
          <div className='modalBody'>
            {children}
          </div>
          <Footer onClose={this.onClose} buttonPosition={buttonPosition} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  top: PropTypes.number,
  left: PropTypes.number,
  clickBackGroundClose: PropTypes.bool,
  customeCloseButton: PropTypes.object,
  buttonPosition: PropTypes.string
}

Modal.defaultProps ={
  onCancel: () => {},
  onConfirm: () => {},
  buttonPosition: ''
}

export default Modal;
