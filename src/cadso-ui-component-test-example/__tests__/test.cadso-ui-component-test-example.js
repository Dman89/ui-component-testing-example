// import { expect } from 'chai';
import 'regenerator-runtime/runtime';
import Enzyme, { mount } from 'enzyme';
import { UIEnzymeAdapter } from '@servicenow/ui-enzyme-adapter';
import view from '../view.js';

// Unit Tests
// 1. Functions return expected values
//      fn() => expected value
// 2. ActionHandlers update state as expected
//      dispatch('ACTION', payload) => new value on state
// 3. Component renders correctly with different props & interactions / states
//      mount(<Component prop1={value1} prop2={value2} />) => Props present in the component
// 4. Component updates correctly with different props & interactions / states
//      mount(<Component />) => dispatched event => state updated

Enzyme.configure({ adapter: new UIEnzymeAdapter() });

describe('button', () => {
    it('should have a primary button', () => {
        const vnode = view();
        const wrapper = mount(vnode);
        expect(wrapper.find('.btn-primary')).to.have.length(1);
    });

    it('should have a danger button', () => {
        const vnode = view();
        const wrapper = mount(vnode);
        expect(wrapper.find('.btn-danger')).to.have.length(1);
    });

    it('should have a secondary button', () => {
        const vnode = view();
        const wrapper = mount(vnode);
        expect(wrapper.find('.btn-secondary')).to.have.length(1);
    });
});