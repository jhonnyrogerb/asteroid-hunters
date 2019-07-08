import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { fetchFeed } from "./actions";
import AsteroidCard from "~/components/AsteroidCard/AsteroidCard";

import style from "./Feed.css"

class Feed extends Component {
    componentDidMount() {
        this.props.fetchFeed(moment().subtract(7, 'days').format("YYYY-MM-DD"), moment().format("YYYY-MM-DD"))
    }

    render() {
        const { feed } = this.props.feedState;

        return (
            <div>
                {feed && feed.map((data, index) => 
                    <AsteroidCard data={data} key={index} />
                )}
            </div>
        );
    };
}

const mapStateToProps = ({ feedState }) => ({ feedState });

const mapDispatchToProps = dispatch => ({
    fetchFeed: (startDate, endDate) => dispatch(fetchFeed(startDate, endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
