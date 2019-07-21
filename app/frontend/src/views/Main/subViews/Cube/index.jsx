import Behaviour from './Cube.Behaviour';
import Styles from './Cube.Styles';
import View from './Cube.View';

const Cube = Behaviour(Styles(View));

export { Cube };