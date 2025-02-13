
import PropTypes from 'prop-types';

export const FormLabel = ({ htmlFor, children }) => {
  return (
    <label 
      htmlFor={htmlFor}
      className='col-sm-4 col-form-label'>
        {children}
    </label>)
}


FormLabel.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string.isRequired
};

export default FormLabel;