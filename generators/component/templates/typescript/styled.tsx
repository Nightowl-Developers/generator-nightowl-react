import * as React from 'react';
import classNames from 'classnames';

import <%= name %>Base from './styled/<%= name %>Base';

const <%= name %> = (props: <%= name %>Props): React.FC => {
    return <div>
        <p>Functional Component</p>
    </div>;
};

interface <%= name %>Props {
    // props go here
}

export default <%= name %>;
