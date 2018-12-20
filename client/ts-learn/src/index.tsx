import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello, Hello2 } from './components/hello';

ReactDOM.render(
    <>
        <Hello compiler="TS" framework="react" />
        <Hello2 compiler="TS" framework="react" />
    </>,
    document.getElementById("example") as HTMLElement
)