import Store from './Skills.Store';
import Behaviour from './Skills.Behaviour';
import View from './Skills.View';

const Skills = Store(Behaviour(View));

export { Skills };
