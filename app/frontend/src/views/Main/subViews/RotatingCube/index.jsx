import Behaviour from './RotatingCube.Behaviour';
import Styles from './RotatingCube.Styles';
import View from './RotatingCube.View';

const RotatingCube = Behaviour(Styles(View));

export { RotatingCube };