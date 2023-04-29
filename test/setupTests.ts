import { setProjectAnnotations } from "@storybook/react";
import "@testing-library/jest-dom";
import "isomorphic-fetch";
import globalStorybookConfig from "../.storybook/preview";
import "./setup/server";

setProjectAnnotations(globalStorybookConfig);
