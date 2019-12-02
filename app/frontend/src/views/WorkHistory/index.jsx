import Store from './WorkHistory.Store';
import Behaviour from './WorkHistory.Behaviour';
import Styles from './WorkHistory.Styles';
import View from './WorkHistory.View';

const WorkHistory = Store(Behaviour(Styles(View)));

export { WorkHistory };
