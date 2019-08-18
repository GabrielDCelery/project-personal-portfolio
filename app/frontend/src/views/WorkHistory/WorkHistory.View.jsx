import React from "react";
//import Paper from "@material-ui/core/Paper";
import {
  Button,
  Container,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Toolbar,
  Typography
} from "@material-ui/core";
import {
  Heading,
  StepIcon
} from './components';

export default function WorkHistoryView({
  actionSetActiveWorkHistoryStep,
  stateWorkHistoryActiveStepIndex,
  stateWorkHistoryPlaces
}) {
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Typography variant="h3" gutterBottom>WORK HISTORY</Typography>
        <Stepper
          nonLinear={true}
          activeStep={stateWorkHistoryActiveStepIndex}
          orientation="vertical"
        >
          {stateWorkHistoryPlaces.map(({ company, content, date, type }, index) => (
            <Step key={index}>
              <StepLabel StepIconComponent={() => (
                <StepIcon
                  isActive={stateWorkHistoryActiveStepIndex === index}
                  onClick={() => { actionSetActiveWorkHistoryStep(index) }}
                />
              )}>
                <Toolbar>
                  <Typography component="p"><strong>{date}</strong></Typography>
                  <Typography component="div" style={{ flexGrow: 1 }}></Typography>
                  <Typography component="p"><strong>{company}</strong></Typography>
                </Toolbar>
              </StepLabel>
              <StepContent>
                <div style={{ padding: '1em' }}>
                  <Paper>
                    <Typography variant="h6" style={{
                      background: '#2c9fda',
                      padding: '0.5em',
                      textAlign: 'right',
                      border: '1px solid #000 !important'
                    }}>Insurance Broker Custom Dashboard</Typography>
                    <Heading>Project Description</Heading>
                    <div style={{ padding: '1em' }}>
                      <p>One of our clients approached us with a request to automate their insurance renewal process. At the time their handlers were sending excel spreadsheets to the insurers and manage the entire process via emails.</p>
                      <p>In order to accomodate their request we had to build a custom dashboard</p>
                    </div>
                    <Heading>Key Responsibilites</Heading>
                    <div style={{ padding: '1em' }}>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et quam mattis, dignissim arcu a, tempus magna. Phasellus ullamcorper dolor nec consequat dignissim. Proin finibus condimentum viverra. Nulla ornare dui et convallis pulvinar. Donec semper euismod lacinia. Maecenas non dui nec arcu facilisis facilisis eget nec libero. In dapibus venenatis neque non varius. Ut ac ultricies magna. Fusce tempus vitae nibh ut maximus. Cras vel erat in ante pulvinar tincidunt.</p>
                    </div>
                    <Heading>Technologies Used</Heading>
                    <div style={{ padding: '1em' }}>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et quam mattis, dignissim arcu a, tempus magna. Phasellus ullamcorper dolor nec consequat dignissim. Proin finibus condimentum viverra. Nulla ornare dui et convallis pulvinar. Donec semper euismod lacinia. Maecenas non dui nec arcu facilisis facilisis eget nec libero. In dapibus venenatis neque non varius. Ut ac ultricies magna. Fusce tempus vitae nibh ut maximus. Cras vel erat in ante pulvinar tincidunt.</p>
                    </div>
                  </Paper>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Container>
    </React.Fragment>
  );
}