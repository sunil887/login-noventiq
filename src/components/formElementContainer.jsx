const FormElementContainer = ({ children }) => {
  return <div className="col-sm-8">
    <span className="d-flex border align-items-center input-container">
    {children}
    </span>
  </div>
}

export default FormElementContainer;