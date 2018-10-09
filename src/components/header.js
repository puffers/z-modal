import React from 'react';
import PropTypes from 'prop-types';

const Header = ({
  onClose,
  onConfirm,
  customeCloseButton,
  cancelButtonContent,
  confirmButtonContent
}) => (
  <div className='modalHeader'>
    <div className='buttonGroup'>
      <button onClick={onClose}>{cancelButtonContent}</button>
      <button onClick={onConfirm}>{confirmButtonContent}</button>
    </div>
    <div className='closeButton' style={customeCloseButton}><a onClick={onClose}>close</a></div>
  </div>
);

Header.propTypes = {
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  cancelButtonContent: PropTypes.string,
  confirmButtonContent: PropTypes.string
}

Header.defaultProps ={
  onClose: () => {},
  onConfirm: () => {},
  cancelButtonContent: 'Cancel',
  confirmButtonContent: 'Ok'
}

export default Header;
