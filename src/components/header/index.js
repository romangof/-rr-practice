import React from 'react';
import { connect } from 'react-redux';

import { changeDisplayedSection } from './actions';

import './index.less';

function Header({ changeDisplayedSection }) {
    return <div className='header'>
        <div>home</div>
        <div onClick={changeDisplayedSection}>about</div>
    </div>;
}

export default connect(null, { changeDisplayedSection })(Header);