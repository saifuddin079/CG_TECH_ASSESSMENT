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

  it("renders a div element", () => {
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("format date should return date string", () => {
    let d = "2020-01-01";
    let result = wrapper.vm.formatDate(d);
    expect(result).toBe("Wednesday 01 Jan, 2020");
  });

  it("getShowDetails should return a response", async() => {
    let d = { title: "sample" };
    wrapper.vm.getShowDetails = jest.fn()
    await wrapper.vm.getShowDetails();
    expect(wrapper.vm.showDetails).toEqual(d);
  });
});
