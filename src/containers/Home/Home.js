import React from "react";
import { connect } from "react-redux";

import style from "./Home.css"

const Home = () => {
    return (
        <div className={style.HomeDiv}>
            <p>Home Component</p>
        </div>
    );
};

const mapStateToProps = store => {
    return { store }
};

export default connect(mapStateToProps)(Home);

