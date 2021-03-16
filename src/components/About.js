import css from '../styles/about.module.css';
import { VmLogo } from './Svgs';

const About = () => (
  <div className={css.container}>
    <VmLogo style={css.logo} />
    <div className={css.content}>
      <h2>This is a websited that displays the All the crypto that a worth more than a dollar</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nesciunt dolor eius rem voluptates aliquid, itaque labore quae laborum qui
        illum amet placeat ea nisi
        sapiente natus corporis quia voluptatem maiores!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nesciunt dolor eius rem voluptates aliquid, itaque labore quae laborum qui
        illum amet placeat ea nisi
        sapiente natus corporis quia voluptatem maiores!
      </p>
    </div>
  </div>
);

export default About;
