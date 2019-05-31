import React from 'react';

const Header = props => {
    const {city} = props;
    return (
        <div id="header">
            <h1 className="title">2조</h1>
            <header className="App-header">
                <h2 className="desc"> react.Js 과제입니다. </h2>
            </header>
        </div>
    );
};
export default Header;