import React, {Component} from "react";
import {connect} from "react-redux";
import moment from "moment";

import {fetchFeed} from "./actions";
import AsteroidCard from "~/components/AsteroidCard";
import AsteroidContentModal from "~/components/AsteroidContentModal";

import {Container} from "~/style"
import Modal from "~/components/Modal";


//TODO: improve logic
class Feed extends Component {
    state = {modalVisible: false, currentCard: null, currentAsteroid: null};

    showModal = (currentAsteroid, currentCard) => this.setState({modalVisible: true, currentCard, currentAsteroid});

    hideModal = () => this.setState({modalVisible: false});

    componentDidMount() {
        this.props.fetchFeed(moment().subtract(7, 'days').format("YYYY-MM-DD"), moment().format("YYYY-MM-DD"))
    }

    render() {
        const {feed} = this.props.feedState;
        const {unitOfMeasure} = this.props.configState;

        return (
            <Container>
                <Modal
                    visible={this.state.modalVisible}
                    onClose={this.hideModal}
                    animation={'slideUp'}
                    title={this.state.currentAsteroid && this.state.currentAsteroid.name}
                >
                    {this.state.currentAsteroid && <AsteroidContentModal
                        data={this.state.currentAsteroid}
                        unitOfMeasure={unitOfMeasure}
                    />}
                </Modal>

                {feed && feed.map((data, index) =>
                    <AsteroidCard
                        data={data}
                        key={index}
                        unitOfMeasure={unitOfMeasure}
                        onClick={() => this.showModal(data, index)}
                        isCurrentCard={this.state.currentCard === index}
                    />
                )}
            </Container>
        );
    };
}

const mapStateToProps = ({feedState, configState}) => ({feedState, configState});

const mapDispatchToProps = dispatch => ({
    fetchFeed: (startDate, endDate) => dispatch(fetchFeed(startDate, endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
