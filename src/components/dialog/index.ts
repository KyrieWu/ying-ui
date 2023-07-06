import { App } from "vue";
import YDialog from "./Dilalog.vue";

export default {
  install(app: App) {
    app.component(YDialog.name, YDialog);
  },
};
