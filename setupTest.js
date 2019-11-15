import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import {create} from "react-test-renderer";

Enzyme.configure({adapter: new Adapter()});

// global.mount = mount;
// global.waitForAsync = () => new Promise(resolve => setImmediate(resolve));
// global.asyncCreate = async component => {
//     const tree = create(component);
//     await waitForAsync();
// 
//     return tree;
// };
