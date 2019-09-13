import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import SmurfCard from './SmurfCard';

import { getSmurfs, deleteSmurf } from '../actions';

class SmurfsList extends React.Component {

    componentDidMount() {
        this.props.getSmurfs();
    }

    deleteSmurf = (e, id) => {
        this.props.deleteSmurf(id)
    }

    render() {
        return (
            <div className="smurf-list">
                {this.props.fetchingSmurfs ? (
                    <Loader type="Circles" color="navy" height={80} width={80} />
                ) : <ul>{this.props.smurfs.map(smurf => {
                    return (
                        <SmurfCard
                            key={smurf.id}
                            smurf={smurf}
                            deleteSmurf={this.deleteSmurf}
                        />
                    )
                })}</ul>

                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
})

export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(SmurfsList);