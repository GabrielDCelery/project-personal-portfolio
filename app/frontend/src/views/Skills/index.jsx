import Store from './Skills.Store';
import Behaviour from './Skills.Behaviour';
import Styles from './Skills.Styles';
import View from './Skills.View';

const Skills = Store(Behaviour(Styles(View)));

export { Skills };
