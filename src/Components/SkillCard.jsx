import React, { Component } from 'react';

class SkillCard extends Component {
    render() {
        const {src, content} = this.props;


        return (
            <>
                <div className='Skill-card'>
                    <img src={src} alt='tkt'/>
                    <h3>{content}</h3>
                </div>
            </>
        );
    }
}

export default SkillCard;
