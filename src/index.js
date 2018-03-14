/**
 * Created by whobird on 2018/3/13.
 */

import _ from 'lodash'



function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack_XX'], ' ');
    element.classList.add('hello');
    return element;
}

document.body.appendChild(component());