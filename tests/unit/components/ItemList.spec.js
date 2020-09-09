import { shallowMount } from "@vue/test-utils";
import ItemList from "@/components/ItemList.vue";

describe("ItemList.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ItemList);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("renders a ul element", () => {
    wrapper.setProps({ results: [] });
    expect(wrapper.find("ul").exists()).toBe(true);
  });
});
