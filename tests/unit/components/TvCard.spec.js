import { shallowMount } from "@vue/test-utils";
import TvCard from "@/components/TvCard.vue";

describe("TvCard.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TvCard, {
      stubs: {
        "font-awesome-icon": true
      },
      propsData: {
        type: "movie",
        item: {
          title: "Demo title",
          poster_path: "image"
        }
      },
      computed: {
        imgPath: () => "/path/to/img/"
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("renders a li with class card", () => {
    expect(wrapper.findAll("li.card").length).toEqual(1);
  });

  test("emits viewDetail when button is clicked", () => {
    wrapper.vm.viewDetail();
    expect(wrapper.emitted("item-clicked")).toHaveLength(1);
  });
});
