import { setProjectAnnotations } from "@storybook/react";
import "@testing-library/jest-dom";
import "isomorphic-fetch";
import { setupServer } from "msw/node";
import globalStorybookConfig from "../.storybook/preview";
import { handlers } from "./mocks/apis/handlers";

setProjectAnnotations(globalStorybookConfig);

export const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
