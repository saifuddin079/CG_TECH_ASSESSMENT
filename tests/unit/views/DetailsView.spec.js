import { shallowMount } from "@vue/test-utils";
import DetailsView from "@/views/DetailsView.vue";

describe("DetailsView.vue", () => {
  let wrapper;
  const $route = {
    params: "id"
  };
  beforeEach(() => {
    wrapper = shallowMount(DetailsView, {
      mocks: {
        $route
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("DetailsView is a vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("renders a div element", () => {
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("format date should return date string", () => {
    let d = "2020-01-01";
    let result = wrapper.vm.formatDate(d);
    expect(result).toBe("Wednesday 01 Jan, 2020");
  });

  it("getShowDetails should return a clone", () => {
    let d = [{ a: 1 }];
    wrapper.vm.getShowDetails(d);
    expect(wrapper.vm.showDetails).toEqual(d);
  });
  /*  it('get details api should return a reponse', () => {
        let d = jest.fn()
        wrapper.vm.loadData(d => {
         axios.get().then().catch()
        })
     }) */
});
