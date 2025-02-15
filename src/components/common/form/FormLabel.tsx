import React, { ReactNode } from 'react';

interface FormLabelProps {
  htmlFor: string;
  children: ReactNode;
}

const FormLabel: React.FC<FormLabelProps> = ({ htmlFor, children }) => {
  return (
    <label 
      htmlFor={htmlFor}
      className="col-sm-4 col-form-label">
      {children}
    </label>
  );
};

export default FormLabel;
