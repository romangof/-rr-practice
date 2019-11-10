import React from "react";
import { connect } from 'react-redux';

import { changeDisplayedSection } from "./actions";

function Header({ changeDisplayedSection }) {
    return <div>
        <ul>
            <li>home</li>
            <li onClick={changeDisplayedSection}>about</li>
        </ul>
    </div>
};

export default connect(null, { changeDisplayedSection })(Header);