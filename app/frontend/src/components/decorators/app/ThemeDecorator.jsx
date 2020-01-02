import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import config from 'config';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: config.styles.colors.primary
    },
    secondary: {
      main: config.styles.colors.secondary
    }
  }
});

export const ThemeDecorator = ToWrapComponent => {
  const WrapperComponent = props => (
    <ThemeProvider theme={theme}>
      <ToWrapComponent {...props} />
    </ThemeProvider>
  );

  return WrapperComponent;
};
