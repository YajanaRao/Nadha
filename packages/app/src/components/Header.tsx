import React, { useContext } from 'react';
import { Appbar, ThemeContext, useTheme, Theme } from "@nadha/views";

const Header = () => {
    const { dispatch } = useContext(ThemeContext);
    const theme: Theme = useTheme();
    return (
        <Appbar title={"Nadha"} isDark={theme.dark} onToggle={() => dispatch({ theme: theme.name })} />
    );
};

export default Header;