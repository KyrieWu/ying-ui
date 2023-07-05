import { App } from "vue";
import YContainer from "./Container.vue";
import YHeader from "./Header.vue";
import YFooter from "./Footer.vue";
import YAside from "./Aside.vue";
import YMain from "./Main.vue";

export default {
  install(app: App) {
    app.component(YContainer.name, YContainer);
    app.component(YHeader.name, YHeader);
    app.component(YFooter.name, YFooter);
    app.component(YAside.name, YAside);
    app.component(YMain.name, YMain);
  },
};
