import React, { Component } from 'react'

export default class ProjectCard extends Component {
  render() {
    const {src, title, description, logo} = this.props;
    return(
        <div className='Project-card'>
          <img src={src} alt="" />
          <section>
            <article>
              <h1>{title}</h1>
              <h3>{description}</h3>
            </article>
            <img src={logo} alt="" />
          </section>
        </div>
      )
  }
}
