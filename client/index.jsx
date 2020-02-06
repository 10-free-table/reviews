import React from 'react';
import ReactDOM from 'react-dom';

import ReviewModule from './reviews/ReviewModule.jsx';

const pageId = 1;

ReactDOM.render(<ReviewModule pageId={pageId} />, document.getElementById('reviews'));
