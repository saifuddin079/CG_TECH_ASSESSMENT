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

  it('is instantiated', () => {
    expect(wrapper).toBeTruthy();
  });

  it("renders a div element", () => {
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("calls viewMoreData method when button is clicked", () => {
    wrapper.vm.viewMoreData = jest.fn();
    wrapper.find("button").trigger("click");
    expect(wrapper.vm.viewMoreData).toHaveBeenCalledTimes(1);
  });

  it("emits on-close when button is clicked", () => {
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted("view-more")).toHaveLength(1);
  });
});
