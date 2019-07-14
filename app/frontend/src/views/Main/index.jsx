import Behaviour from './Main.Behaviour';
import Styles from './Main.Styles';
import View from './Main.View';

const Main = Behaviour(Styles(View));

export { Main };