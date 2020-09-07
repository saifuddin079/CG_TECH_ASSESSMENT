import { shallowMount } from '@vue/test-utils'
import DetailsView from '@/views/DetailsView.vue'
import axios from 'axios'


describe('DetailsView.vue', () => {
    let wrapper;
    const $route = {
        params: 'id'
    }
    beforeEach(() => {
        wrapper = shallowMount(DetailsView, {
            mocks: {
                $route
            }
        })
    })

    afterEach(() => {
        wrapper.destroy()
    })

    it('DetailsView is a vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('renders a div element', () => {
        expect(wrapper.find('div').exists()).toBe(true)
    })

    it('formatDate should not be undefined', () => {
        const fn = jest.fn();
        wrapper.setMethods({ formatDate: fn });
        expect(fn).not.toBe(undefined)
    })

    it('get details api should return a reponse', () => {
        wrapper.vm.loadData().then(data => {
            expect(data.title).toBe('SAMPLE')
        })
    })

})