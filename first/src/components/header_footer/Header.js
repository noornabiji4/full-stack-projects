import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from 'material-icons';
import IconButton from '@material-ui/core/IconButton';




class Header extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: 'red',
                    boxShadow: 'none',
                    padding: '10px 0px'

                }}
            >
                Header
            </AppBar>
        );
    }
}

export default Header;