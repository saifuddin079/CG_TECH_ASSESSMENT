import { shallowMount } from "@vue/test-utils";
import LandingView from "@/views/LandingView.vue";

describe("LandingView.vue", () => {
  let wrapper;
  const $router = {
    push: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallowMount(LandingView, {
      stubs: {
        "font-awesome-icon": true
      },
      mocks: {
        $router
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("LandingView is a vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("renders a div element", () => {
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("sortByGenre should not be undefined", () => {
    const fn = jest.fn();
    wrapper.setMethods({ sortByGenre: fn });
    expect(fn).not.toBe(undefined);
  });

  it("getTopPopular should return sorted array", () => {
    let arr = [
      { rating: { average: 1 } },
      { rating: { average: 2 } },
      { rating: { average: 3 } }
    ];
    wrapper.vm.numItems = 1;
    let result = wrapper.vm.getTopPopular(arr);
    expect(result).toEqual([{ rating: { average: 3 } }]);
  });

  it("sortByGenre should return modified obj", () => {
    let arr = [{ genres: ["comedy", "anime"], name: "Sample_1" }];
    let temp = {};
    wrapper.vm.genreList = ["comedy", "anime"];
    let result = wrapper.vm.sortByGenre(arr, temp);
    expect(result).toEqual({
      comedy: [{ genres: ["comedy", "anime"], name: "Sample_1" }],
      anime: [{ genres: ["comedy", "anime"], name: "Sample_1" }]
    });
  });

  it("showmore should add more results", () => {
    wrapper.vm.showCount = 5;
    wrapper.vm.showMore();
    expect(wrapper.vm.showCount).toBe(10);
  });

  it("redirect when viewdetails is called", () => {
    let id = "test";
    wrapper.vm.viewDetailInfo(id);
    expect($router.push).toHaveBeenCalledWith("/details/" + id);
  });
});
