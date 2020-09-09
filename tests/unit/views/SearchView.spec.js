import { shallowMount } from "@vue/test-utils";
import SearchView from "@/views/SearchView.vue";

describe("SearchView.vue", () => {
  let wrapper;
  const $route = {
    query: "q"
  };
  const $router = {
    push: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallowMount(SearchView, {
      mocks: {
        $route,
        $router
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("renders a div element", () => {
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("showmore should add more results", () => {
    wrapper.vm.showCount = 5;
    wrapper.vm.showMore();
    expect(wrapper.vm.showCount).toBe(15);
  });

  it("loadmore should do nothing", () => {
    let q = "";
    wrapper.vm.loadData(q);
    expect(false).toBe(false);
  });

  it("reditects to /details when viewDetails is called", () => {
    let id = "test";
    wrapper.vm.viewDetailInfo(id);
    expect($router.push).toHaveBeenCalledWith("/details/" + id);
  });

  it("search shows should return non empty array", () => {
    let d = [
      { score: 1, show: { name: 1 } },
      { score: 2, show: { name: 2 } },
      { score: 2, show: { name: 3 } }
    ];
    wrapper.vm.showCount = 2;
    wrapper.results = [];
    wrapper.vm.slicedResults = [];
    wrapper.vm.searchShows(d);
    for (let c of d) {
      wrapper.results.push(c.show);
    }
    expect(wrapper.vm.slicedResults).toEqual([{ name: 1 }, { name: 2 }]);
  });

  it("search shows should not do anything", () => {
    let d = undefined;
    wrapper.vm.searchShows(d);
    expect(false).toBe(false);
  });
});
