"use strict";

export function html ([first, ...res], ...values) {
    return values.reduce((acc, curent) => {
        return acc.concat(curent, res.shift());
    }, [first]).filter((fill) => {
        return fill !== true && fill !== false;
    }).join('');
};


// function createstore (reducer) {
//     let state = reducer(); 
//     const roots = new Map();

//     function render () {
//         for (const [root, component] of roots) {
//             const output = component();
//             root.innerHTML = output;
//         }
//     }

//     return {
//         attach(component, root) {
//             roots.set(root, component);
//             render();
//         },
//         connect (selector = (state) => {return state}) {
//             return (component) => {
//                 return (props, ...args) => {
//                     return component(Object.assign({}, props, selector(state), ...args));
//                 }
//             }
//         }
//     }
// }


