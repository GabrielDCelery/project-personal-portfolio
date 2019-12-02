import Store from './Achievments.Store';
import Behaviour from './Achievments.Behaviour';
import Styles from './Achievments.Styles';
import View from './Achievments.View';

const Achievments = Store(Behaviour(Styles(View)));

export { Achievments };
