import React from 'react';
import { Navigation } from '@liquid-design/liquid-design-react';

function Nav() {
    return (
        <Navigation
            style={{ position: "fixed", bottom: "0px", top: "0px" }}
            title="Nav"
            tabs={[
                {
                    title: 'Statistics',
                    iconName: 'atoms',
                    href: '/',
                },
                {
                    title: 'By Localization',
                    iconName: 'settings',
                    href: '/localization',
                },
                {
                    title: 'Data',
                    iconName: 'listView',
                    href: '/dataset',
                },
            ]}
        />)
}

export default Nav;

