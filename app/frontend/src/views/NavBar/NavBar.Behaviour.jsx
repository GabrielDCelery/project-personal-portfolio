import React, { useState } from 'react';

export default function NavBarBehaviour(ToWrapComponent) {
  let WrapperComponent = props => {
    const [isMobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!isMobileOpen);
    }

    return (
      <ToWrapComponent
        {...props}
        {...{
          isMobileOpen,
          handleDrawerToggle
        }}
      />
    )
  }

  return WrapperComponent;
}