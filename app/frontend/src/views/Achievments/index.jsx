import Store from './Achievments.Store';
import Behaviour from './Achievments.Behaviour';
import View from './Achievments.View';

const Achievments = Store(Behaviour(View));

export { Achievments };
