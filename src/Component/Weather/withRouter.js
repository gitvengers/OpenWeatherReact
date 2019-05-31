import {Link, withRouter} from 'react-router-dom'
import React from "react";


const List = props => {
    const {cities, match} = props;
    const {path} = match;

    return (
        <div>
            <div className="align_center">
                <h1 className="listHeader"> Cities List </h1>
                <ul className="citiList">
                    {cities.map(item => (
                        <li className="cities" key={item}>
                            <Link to={`${path}/${item}`}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default withRouter(List);