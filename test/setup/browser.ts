import { SetupWorker, rest, setupWorker } from "msw";
import { handlers } from "../mocks/apis/handlers";

declare global {
  interface Window {
    msw: {
      worker: SetupWorker;
      rest: typeof rest;
    };
  }
}

if (typeof global.process === "undefined") {
  const worker = setupWorker(...handlers);
  worker.start({
    onUnhandledRequest: (request, print) => {
      if (request.url.hostname !== "localhost") {
        print.error();
      }
    },
  });
  window.msw = {
    worker,
    rest,
  };
}
