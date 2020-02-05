import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import styles from '../styles/styles.css';

const WouldRecommend = (props) => {
  const { wouldRecommendPerc } = props;
  return (
    <div styleName="ratingContainer">
      <div styleName="ratingDiv">
        <div styleName="icoContainer">
          <FontAwesomeIcon styleName="inlineIco" icon={faThumbsUp} />
        </div>
        <div styleName="ratingLabel">
          {`${wouldRecommendPerc}% of people `}
          <span styleName="ratingSubtext">
            would recommend it to a friend
          </span>
        </div>
      </div>
    </div>
  );
};

WouldRecommend.propTypes = {
  wouldRecommendPerc: PropTypes.number.isRequired,
};

export default CSSModules(WouldRecommend, styles, { allowMultiple: false });
