import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [{
                id: 1,
                title: 'show'
            }, {
                id: 2,
                title: 'show2'
            },
            {
                id: 3,
                title: 'show2'
            },
            {
                id: 4,
                title: 'show2'
            },
            {
                id: 5,
                title: 'show2'
            }]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, title }) =>
                    <MenuItem key={id} title={title}></MenuItem>
                )}
            </div>
        )
    }
}

export default Directory;