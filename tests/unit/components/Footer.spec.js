import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";

describe("Header.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Footer);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("Footer is a component", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("renders a div with class footer", () => {
    expect(wrapper.find("div.footer").exists()).toBe(true);
  });
});
