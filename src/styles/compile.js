/* Compile SASS */

import sass from 'node-sass';
import fs from 'fs';

const watchPath = './style.scss';
const exportPath = '../../public/style.css';

var compile = function() {
    sass.render({file: watchPath}, (err, result) => {
        if (err) {
            console.error(err);
        } else {
            fs.writeFile(exportPath, result.css, (err) => { console.log(err); });
            // css map???
        }
    });
}

var watch = function() {
    return fs.watch(watchPath, (eventType, filename) => {
        if (eventType === 'change') {
            compile()
        }
    });
}

export {compile, watch};
export default watch;