// Importing React and the ReactNode type
// ReactNode is used to define the type of children prop, which can be any valid React element
import React, { ReactNode } from "react";

// Defining the Authlayout component
// This component serves as a layout wrapper specifically for authentication-related pages
// It wraps around the children components, which in this case are likely the SignIn and SignUp components
const Authlayout = ({ children }: { children: ReactNode }) => {
  // Rendering the children components inside a <div> container
  // This ensures that the SignIn and SignUp components are displayed within this layout
  return <div className="auth-layout">{children}</div>;
};

// Exporting the Authlayout component
// This allows the Authlayout to be imported and used in other parts of the application
export default Authlayout;
