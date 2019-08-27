import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import Rodal from 'rodal';

import { fetchFeed } from "./actions";
import AsteroidCard from "~/components/AsteroidCard";

import { Container } from "~/style"


//TODO: improve logic
class Feed extends Component {
  state = { modalVisible: false, currentCard: null };

  showModal = currentCard => this.setState({ modalVisible: true, currentCard });

  hideModal = () => this.setState({ modalVisible: false });

  componentDidMount() {
    this.props.fetchFeed(moment().subtract(7, 'days').format("YYYY-MM-DD"), moment().format("YYYY-MM-DD"))
  }

  render() {
    const { feed } = this.props.feedState;
    const { unitOfMeasure } = this.props.configState;

    return (
      <Container>
        <Rodal
          visible={this.state.modalVisible}
          onClose={this.hideModal}
          animation={'slideUp'}
        >
          <div>Content</div>
        </Rodal>

        {feed && feed.map((data, index) =>
          <AsteroidCard
            data={data}
            key={index}
            unitOfMeasure={unitOfMeasure}
            onClick={() => this.showModal(index)}
            isCurrentCard={this.state.currentCard === index}
          />
        )}
      </Container>
    );
  };
}

const mapStateToProps = ({ feedState, configState }) => ({ feedState, configState });

const mapDispatchToProps = dispatch => ({
  fetchFeed: (startDate, endDate) => dispatch(fetchFeed(startDate, endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
