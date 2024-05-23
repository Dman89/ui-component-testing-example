import { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import { UIEnzymeAdapter } from '@servicenow/ui-enzyme-adapter';
import view from '../view.js';

describe('cadso-ui-component-test-example Test', () => {
	it('should be true', () => {
		expect(true).toBe(true);
	});
});

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