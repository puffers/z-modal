import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({
  onClose,
  onConfirm,
  cancelButtonContent,
  confirmButtonContent,
  buttonPosition
}) => {
  const modalFooterClassNames = `modalFooter ${buttonPosition === 'left' ? 'buttonOnLeft' : 'buttonOnRight'}`;
  
  return (
    <div className={modalFooterClassNames}>
      <div className='buttonGroup'>
        <button onClick={onClose}>{cancelButtonContent}</button>
        <button onClick={onConfirm}>{confirmButtonContent}</button>
      </div>
    </div>
  )
};

Footer.propTypes = {
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  cancelButtonContent: PropTypes.string,
  confirmButtonContent: PropTypes.string
}

Footer.defaultProps ={
  onClose: () => {},
  onConfirm: () => {},
  cancelButtonContent: 'Cancel',
  confirmButtonContent: 'Ok'
}

export default Footer;
