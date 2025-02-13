import PropTypes from 'prop-types';

const FormElementContainer = ({ children }) => {
  return <div className="col-sm-8">
    {children}
  </div>  
}


FormElementContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormElementContainer;