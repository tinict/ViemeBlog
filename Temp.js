"use strict";

export const html = ([First, ...res], ...values) => {
    return values.reduce((acc, val)=> {
        return acc.concat(val, res.shift());
    }, [First]).filter((fill) => {
        return fill != true && fill != false;
    }).join('');
}
export const Message_html = html `
    <h1>Wellcome to ${'ViemeBlog'}</h1
`
export const createStore = (reducer) => {
    let state = reducer(); //trả về dữ liệu ban đầu của store và lưu vào state
    const roots = new Map();

    //Cập nhật lại root
    function render() {
        console.log("Render")
        for (const [root, component] of roots) {
            const output  =  component();
            root.innerHTML = output;
        }
    }

    return {
        attach(component, root) {
            console.log("Attach");
            roots.set(root, component);
            render();
        },
        connect(selector = (state) => {return state;}) {
            // props là truyền component vào, args là có đối số trong tương nó map lại
            return (component) => { 
                return (props, ...args) => {
                    return component(Object.assign({}, props, selector(state), ...args));
                };
            };
        },
        dispath(action, ...args) {
            console.log("dispath");
            state = reducer(state, action, args);
            render();
        }
    }
}
