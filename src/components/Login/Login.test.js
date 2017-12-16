import React from 'react'
import {shallow} from 'enzyme'
import {Login} from './Login'

describe('Component: Login', () => {
  it('should render component properly', () => {
    const props = {
      auth : {}
    }
    const wrapper = shallow(<Login {...props}/>)
    expect(wrapper).toMatchSnapshot()
  })
})