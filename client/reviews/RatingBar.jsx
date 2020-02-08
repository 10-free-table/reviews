import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from '../styles/styles.css';

const RatingBar = (props) => {
  const { ratings } = props;
  const width = `${ratings.perc}%`;
  return (
    <div styleName="ratingBar">
      <span styleName="barLabel">
        {ratings.label}
      </span>
      <div styleName="barContainer">
        <div styleName="barFill" style={{ width }}></div>
      </div>
    </div>
  );
};

RatingBar.propTypes = {
  ratings: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default CSSModules(RatingBar, styles, { allowMultiple: true });
