import * as React from 'react';
import classNames from 'classnames';

import <%= name %>Base from './styled/<%= name %>Base';

const <%= name %> = (props) => {
    return <<%= name %>Base>
        <p>Functional Component</p>
    </<%= name %>Base>;
};

export default <%= name %>;
