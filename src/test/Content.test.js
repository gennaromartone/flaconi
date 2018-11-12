import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import { expect, assert } from 'chai';
import {spy} from 'sinon';
import Content from '../containers/Content';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

describe('Content component testing', function() {
  it('renders header message', function() {
    const wrapper = shallow(<Content />); 
    const headerMessage = <h2>Info on Products</h2>;
    expect(wrapper.contains(headerMessage)).to.equal(true);
  });

  it('should show the error message when it has error', () => {
    const wrapper = shallow(<Content />);
    wrapper.setState({error: 'error'});
    const errorDiv = <div>There was an error, Please retry later</div>;

    expect(wrapper.contains(errorDiv)).to.equal(true);
    
  });

  it('calls componentDidMount() lifecycle method', () => {
    const componentDidMountSpy = spy(Content.prototype, 'componentDidMount');
    const wrapper = shallow(<Content />);

    assert.ok(Content.prototype.componentDidMount.calledOnce);

    componentDidMountSpy.restore();
  });
});