const requireComponent = import.meta.glob('./demo/*.vue', { eager: true })
const modules = []
Object.keys(requireComponent).forEach((fileName) => {
    const pathArr = fileName.split('/');
    const fileNameWithExt = pathArr.pop();
    const componentName = fileNameWithExt.replace('.vue', '');
    const componentConfig = requireComponent[fileName];
    const item = componentConfig.default
    modules[componentName] = item
})


const components = {
    ...modules
}

// 注册组件
const install = function install(app) {
    Object.keys(components).forEach((key) => {
        app.component(key, components[key]);
    });
};

export default {
    install,
    ...components
};
