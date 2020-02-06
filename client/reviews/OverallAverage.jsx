import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import styles from '../styles/styles.css';

const OverallAverage = (props) => {
  let { overallAverage } = props;
  const ratingsArray = [];
  for (let i = 0; i < 5; i += 1) {
    if (i < overallAverage) {
      ratingsArray.push(<FontAwesomeIcon styleName="starChecked" key={i} icon={faStar} />);
    } else {
      ratingsArray.push(<FontAwesomeIcon styleName="starChecked" key={i} icon={farStar} />);
    }
  }
  overallAverage = overallAverage.toFixed(1);
  return (
    <div styleName="overallAverage">
      <div styleName="overallStars">
        {ratingsArray}
      </div>
      <div>
        <span styleName="overallInline">
          {overallAverage}
        </span>
        <span styleName="overallInline">
          based on recent ratings
        </span>
      </div>
    </div>
  );
};

OverallAverage.propTypes = {
  overallAverage: PropTypes.number.isRequired,
};

export default CSSModules(OverallAverage, styles, { allowMultiple: false });
