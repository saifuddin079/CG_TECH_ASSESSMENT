import { shallowMount } from '@vue/test-utils'
import SearchView from '@/views/SearchView.vue'
import axios from 'axios'

describe('SearchView.vue', () => {
    let wrapper;
    const $route = {
        query: 'q'
    }
    beforeEach(() => {
        wrapper = shallowMount(SearchView, {
            mocks: {
                $route
            }
        })
    })

    afterEach(() => {
        wrapper.destroy()
    })

    it('SearchView is a vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('renders a div element', () => {
        expect(wrapper.find('div').exists()).toBe(true)
    })

    it('Search page api', () => {
        wrapper.vm.loadData().then(data => {
           expect(data.title).toBe('SAMPLE')
        })
    })

})