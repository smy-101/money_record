import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";

export const App = defineComponent({
  setup() {
    const count = ref(0);
    return () => (
      <>
        <header>
          导航
          <ul>
            <li>
              <router-link to="/">Foo</router-link>
            </li>
            <li>
              <router-link to="/about">Bar</router-link>
            </li>
          </ul>
        </header>
        <RouterView />
        <footer>页脚</footer>
      </>
    );
  },
});
