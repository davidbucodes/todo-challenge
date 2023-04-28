import "@testing-library/jest-dom";

import { setProjectAnnotations } from "@storybook/react";
import globalStorybookConfig from "../.storybook/preview";

setProjectAnnotations(globalStorybookConfig);
