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

  it("renders a div element", () => {
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("calls viewMoreData method when link is clicked", () => {
    wrapper.vm.viewMoreData = jest.fn();
    wrapper.find("a").trigger("click.prevent");
    expect(wrapper.vm.viewMoreData).toBeCalled();
  });

  test("emits on-close when button is clicked", () => {
    wrapper.find("a").trigger("click");
    expect(wrapper.emitted("view-more")).toHaveLength(1);
  });
});
