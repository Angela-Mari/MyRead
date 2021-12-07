import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => (
  <div className="alert-wrapper" style={{zIndex:"500", position:"fixed", marginTop:"0", width:"100%", textAlign:"center", display:"flex", justifyContent:"center"}}>
    {alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}  style={{width:"25%"}}>
        {alert.msg}
      </div>
    ))}
  </div>
);

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);