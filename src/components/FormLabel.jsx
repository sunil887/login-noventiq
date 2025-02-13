
export const LabelForm = ({ htmlFor, children }) => {
  return <label 
          htmlFor={htmlFor}
          className='col-sm-4 col-form-label' >
             {children} </label>
}

export default LabelForm