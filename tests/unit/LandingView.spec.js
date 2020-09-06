import { shallowMount } from '@vue/test-utils'
import LandingView from '@/views/LandingView.vue'
import axios from 'axios'

describe('LandingView.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(LandingView, {
            stubs: {
                'font-awesome-icon': true,
            }
        })
    })

    afterEach(() => {
        wrapper.destroy()
    })

    it('LandingView is a vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('renders a div element', () => {
        expect(wrapper.find('div').exists()).toBe(true)
    })

    it('landing page api', () => {
        wrapper.vm.loadData().then(data => {
           expect(data.title).toBe('SAMPLE')
        })
    })

    it('sortByGenre should not be undefined', () => {
        const fn = jest.fn();
        wrapper.setMethods({ sortByGenre: fn });
        expect(fn).not.toBe(undefined)
    })

    it('getTopPopular should not be undefined', () => {
        const fn = jest.fn();
        wrapper.setMethods({ getTopPopular: fn });
        expect(fn).not.toBe(undefined)
    })

})