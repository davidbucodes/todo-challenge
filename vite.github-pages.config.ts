import { UserConfigExport, mergeConfig } from "vite";
import config from "./vite.config";

export default mergeConfig(config, {
  base: "/todo-challenge/",
} as UserConfigExport);
