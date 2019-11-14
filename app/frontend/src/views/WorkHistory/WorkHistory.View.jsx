import React from 'react';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Paper,
  Typography
} from '@material-ui/core';
import {
  ComponentLeftAlignedContainer,
  ComponentVerticalGutter
} from 'components';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StyledTypography = styled.div`
  width: 100%;
  background: #082431;
  padding: 1rem !important;
  color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const StyledTypography2 = styled.div`
  width: 100%;
  background: #082431;
  padding: 1rem !important;
  color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export default function WorkHistoryView({ getter, handler }) {
  return (
    <React.Fragment>
      <ComponentVerticalGutter />
      <ComponentLeftAlignedContainer maxWidth="xl">
        <ExpansionPanel
          expanded={getter('isPanelOpen')('panel1')}
          onChange={() => {
            handler('setExpandedPanel')('panel1');
          }}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
            style={{ backgroundColor: '#275a71' }}
          >
            <Typography
              style={{
                fontWeight: 'bold',
                flexBasis: '33.33%',
                flexShrink: 0,
                color: '#fff'
              }}
            >
              AUTOLOGYX LLC
            </Typography>
            <Typography style={{ color: '#ddd', fontWeight: 'bold' }}>
              2018 April. - Present
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <StyledTypography>Project Description</StyledTypography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          expanded={getter('isPanelOpen')('panel2')}
          onChange={() => {
            handler('setExpandedPanel')('panel2');
          }}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
            style={{ backgroundColor: '#275a71' }}
          >
            <Typography
              style={{
                fontWeight: 'bold',
                flexBasis: '33.33%',
                flexShrink: 0,
                color: '#fff'
              }}
            >
              ARKENFORD LLC
            </Typography>
            <Typography style={{ color: '#ddd', fontWeight: 'bold' }}>
              2016 April. - 2018 April
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>b</ExpansionPanelDetails>
        </ExpansionPanel>
      </ComponentLeftAlignedContainer>
    </React.Fragment>
  );
}
