import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import setDeliveryDate from '../../../Actions/orderActions/setDeliveryDate';

class OrderCalendar extends Component {
  constructor(props) {
    super(props);
    this.blockedDate = [new Date(2018, 12, 15)];
    this.blockedDate[0] = this.blockedDate[0].getTime();
  }

  getTileClassName = (date) => {
    const { cake } = this.props;
    const today = new Date();
    const minDate = new Date();
    minDate.setDate(today.getDate() + cake.time);

    let className = '';
    if (date.date <= minDate) className = 'possibleDate';
    if (this.blockedDate.indexOf(date.date.getTime()) >= 0) className = 'forbiddenDate';
    return className;
  }

  getTileDisable = (date) => {
    if (this.blockedDate.indexOf(date.date.getTime()) >= 0) return true;
    if (date.date.getDay() === 0 || date.date.getDay() === 6) return true;
    return false;
  }

  render() {
    const { selectDeliveryDate } = this.props;
    return (
      <Calendar
        onClickDay={date => selectDeliveryDate(date)}
        tileClassName={date => this.getTileClassName(date)}
        tileDisabled={date => this.getTileDisable(date)}
        minDate={new Date()}
      />
    );
  }
}

OrderCalendar.propTypes = {
  selectDeliveryDate: PropTypes.string.isRequired,
  cake: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  cake: state.cakeCharacteristics,
  order: state.orderCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  selectDeliveryDate: date => dispatch(setDeliveryDate(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderCalendar);
