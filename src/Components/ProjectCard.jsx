import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProjectCard extends Component {
  
  render() {
    const {src, title, description, logo, nav} = this.props;

    return(
      
        <Link to={nav} className='Project-card'>
          <img src={src} alt="" />
          <section>
            <article>
              <h1>{title}</h1>
              <h3>{description}</h3>
            </article>
            <img src={logo} alt="" />
          </section>
        </Link>
      )
  }
}
