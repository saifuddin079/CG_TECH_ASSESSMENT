import { shallowMount } from '@vue/test-utils'
import Search from '@/components/Search.vue'

describe('Search.vue', () => {
  let wrapper;
  const $router = {
    push: jest.fn()
  }

  beforeEach(() => {
    wrapper = shallowMount(Search, {
      stubs: {
        'font-awesome-icon': true
      },
      mocks: {
        $router
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

  it('call route when search is invoked', () => {
    window.location.reload = jest.fn();
    $router.push = jest.fn()
    wrapper.vm.query = 'test'
    wrapper.vm.search()
    expect($router.push).toHaveBeenCalledWith('/search?q=' + wrapper.vm.query);
    expect(window.location.reload).toHaveBeenCalled();
  })

  it('not to call route more than once', () => {
    window.location.reload = jest.fn();
    $router.push = jest.fn()
    wrapper.vm.query = 't'
    wrapper.vm.search()
    expect($router.push).toHaveBeenCalledTimes(0);
    expect(window.location.reload).toHaveBeenCalledTimes(0);

  })
})

