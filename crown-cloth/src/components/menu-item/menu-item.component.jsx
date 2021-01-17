import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
    <div className={`${size} menu-item`} onClick={() => {
        console.log(history, '5', match, '6', linkUrl);
        history.push(`${linkUrl}`)
    }}>
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>shop now</span>
        </div>
    </div>
);

export default withRouter(MenuItem);