import React from "react"
import {Route} from 'react-router-dom'
import Weather from './Component/Weather';

const About = () =>
    <div className="about">
        <h1>About</h1>
        <p className="aboutDesc">
            <h2>만든 사람</h2>
            정유택
            이정준
            최수민
            이수민
        </p>
    </div>;
const Home = () =>
    <div className="home">

        <h1>Home</h1>
        <p className="homeDesc">
            Home 화면을 나타내는 Page 입니다.
        </p>
    </div>;

const RouterApp = () => {
    return (
        <div className="App">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/weather" component={Weather}/>
        </div>
    )
};
export default RouterApp;
