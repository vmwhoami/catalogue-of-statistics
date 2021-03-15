import css from '../styles/error.module.css';
import { ErroIcon } from './Svgs';

const Errorpage = () => (
  <div className={css.container}>
    <div className={css.errorcontainer}>
      <ErroIcon style={css.icon} />
      <h2>There has been an error loading your data</h2>
    </div>
  </div>
);

export default Errorpage;
