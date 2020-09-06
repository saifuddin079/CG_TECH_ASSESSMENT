import { shallowMount } from '@vue/test-utils'
import Search from '@/components/Search.vue'

describe('Search.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Search, {
      stubs: {
        'font-awesome-icon': true
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('Search is a component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('displays an empty input field', () => {
    expect(wrapper.find('input').element.placeholder).toBe('Search TV Shows')
    expect(wrapper.find('input').element.value).toBe('')
  })

  it('calls search method when press enter on input', () => {
    const fn = jest.fn();
    wrapper.setMethods({ search: fn });
    wrapper.find('input').trigger('keypress.enter')
    expect(fn).toBeCalled()
  }) 

  it('calls reset search method when on blur event', () => {
    const fn = jest.fn();
    wrapper.setMethods({ resetSearch: fn });
    wrapper.find('input').trigger('blur')
    expect(fn).toBeCalled()
    
  }) 
})