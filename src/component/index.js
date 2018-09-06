import Loadable from 'react-loadable'

const components = (path) => Loadable({
    loader:() => import(`@/component/${path}`),
    loading:() => (null)
});

// Export Components
const SubHeader = components('subHeader/subHeader.jsx');

export {
    SubHeader,
}