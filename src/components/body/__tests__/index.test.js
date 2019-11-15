import React from 'react';
import {mount} from 'enzyme';
import {Body} from '..';

describe('tests a test', () => {
    it('tests a test', () => {
        const bodyComponent = mount(<Body/>);

        const button = bodyComponent.find('button.MuiButtonBase-root').at(0);

        button.simulate('click');

        bodyComponent.update();

        // Do I need to unmount

    });
});

