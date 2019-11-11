import React from 'react';

const NavBarStyles = ToWrapComponent => {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return WrapperComponent;
};

export default NavBarStyles;
