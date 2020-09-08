import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App, {
      stubs: {
        "router-view": true
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("should renders main element #app", () => {
    expect(wrapper.find("#app").exists()).toBe(true);
  });
});
