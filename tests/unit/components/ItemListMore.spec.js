import { shallowMount } from "@vue/test-utils";
import ItemListMore from "@/components/ItemListMore.vue";

describe("ItemListMore.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ItemListMore, {});
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("ItemListMore is a component", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("renders a div element", () => {
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("calls viewMoreData method when link is clicked", () => {
    const fn = jest.fn();
    wrapper.setMethods({ viewMoreData: fn });
    wrapper.find("a").trigger("click.prevent");
    expect(fn).toBeCalled();
  });

  test("emits on-close when button is clicked", () => {
    wrapper.find("a").trigger("click");
    expect(wrapper.emitted("view-more")).toHaveLength(1);
  });
});
