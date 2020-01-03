import Store from './WorkHistory.Store';
import Behaviour from './WorkHistory.Behaviour';
import View from './WorkHistory.View';

const WorkHistory = Store(Behaviour(View));

export { WorkHistory };
