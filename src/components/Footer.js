import css from '../styles/footer.module.css';
import { VmLogo } from './Svgs';

const Footer = () => (
  <footer className={css.footer}>
    <div className={css.container}>
      <VmLogo style={css.logo} />
      &copy;
      {` ${(new Date()).getFullYear()} All rights reserved | site by Vitalie Melnic`}
    </div>
  </footer>
);

export default Footer;
