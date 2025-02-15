import React, { ReactNode } from 'react';

interface FormElementContainerProps {
  children: ReactNode;
}

const FormElementContainer: React.FC<FormElementContainerProps> = ({ children }) => (<div className="col-sm-8">{children}</div>);

export default FormElementContainer;
