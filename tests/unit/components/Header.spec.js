import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Header, {
      stubs: {
        "font-awesome-icon": true,
        "router-link": true
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('is instantiated', () => {
    expect(wrapper).toBeTruthy();
  });

  it("renders a div with class navigation", () => {
    expect(wrapper.find("div.navigation").exists()).toBe(true);
  });

  it("renders a list of items", () => {
    expect(wrapper.find("ul").exists()).toBe(true);
  });
});
