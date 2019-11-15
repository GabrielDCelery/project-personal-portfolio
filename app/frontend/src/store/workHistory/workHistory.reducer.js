import {
  SET_ACTIVE_STEP,
  GO_TO_NEXT_STEP,
  GO_TO_PREVIOUS_STEP
} from './workHistory.constants';

const initialState = {
  activeStepIndex: 0,
  places: [
    {
      type: 'office',
      date: '2018 April. - Present',
      company: 'AUTOLOGYX LTD.',
      content:
        "For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more."
    },
    {
      type: 'office',
      date: '2016 April. - 2018 April',
      company: 'ARKENFORD LTD.',
      content:
        'An ad group contains one or more ads which target a shared set of keywords.'
    }
  ]
};

export const workHistoryReducer = (
  state = initialState,
  { type, activeStepIndex }
) => {
  switch (type) {
    case SET_ACTIVE_STEP:
      return {
        ...state,
        ...{
          activeStepIndex:
            state.activeStepIndex === activeStepIndex ? null : activeStepIndex
        }
      };

    case GO_TO_NEXT_STEP:
      return {
        ...state,
        ...{
          activeStepIndex: state.activeStepIndex + 1
        }
      };

    case GO_TO_PREVIOUS_STEP:
      return {
        ...state,
        ...{
          activeStepIndex:
            state.activeStepIndex - 1 < 0 ? 0 : state.activeStepIndex - 1
        }
      };

    default:
      return state;
  }
};
