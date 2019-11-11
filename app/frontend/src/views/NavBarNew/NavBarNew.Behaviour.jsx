import React, { useCallback } from 'react';
import { WithRouterDecorator } from 'components';

export default function NavBarBehaviour(ToWrapComponent) {
  let WrapperComponent = props => {
    const { location, history } = props;
    const handleNavToPage = useCallback(
      setTo => {
        history.push(setTo);
      },
      [history]
    );

    return (
      <ToWrapComponent
        {...props}
        {...{ stateActivePage: location.pathname, handleNavToPage }}
      />
    );
  };

  WrapperComponent = WithRouterDecorator(WrapperComponent);

  return WrapperComponent;
}
