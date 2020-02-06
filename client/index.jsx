import React from 'react';
import ReactDOM from 'react-dom';

import ReviewModule from './reviews/ReviewModule.jsx';

const pageIdStr = document.location.pathname;
// const pageId = 1;
let pageId = pageIdStr.slice(pageIdStr.indexOf('/') + 1);
if (pageId.indexOf('/') > -1) {
  pageId = pageId.slice(0, pageId.indexOf('/'));
}
pageId = parseInt(pageId, 10);

ReactDOM.render(<ReviewModule pageId={pageId} />, document.getElementById('reviews'));
