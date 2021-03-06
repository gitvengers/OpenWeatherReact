import React from 'react'
import {Link, Route, Switch, withRouter} from "react-router";
import List from "./withRouter";
import todayWeather from "./todayWeather";
import './Weather.css';


const API_CITIES = "http://localhost:8080/weather-crawler/available-cities";

class Weather extends React.Component {
    state = {
        cities: null
    };

    async componentDidMount() {
        const cities = await fetch(API_CITIES)
            .then(res => res.json())
            .then(data => data);

        this.setState({
            cities
        });
    }

    render() {
        const {match} = this.props;
        const {cities} = this.state;
        if (!cities) {
            return (
                <div className="loading_wrapper">
                    <h1 className="listHeader"> Cities List </h1>
                    <p className="loading">Loading...</p>
                </div>
            );
        }
        return (
            <Switch>
                <Route path={`${match.path}/:cityId`} component={todayWeather}></Route>
                <Route exact path={match.path}
                       render={() => <List cities={cities}/>}/>
            </Switch>
        );
    }
}

export default withRouter(Weather);