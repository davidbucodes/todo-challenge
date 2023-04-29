import { getAllTodosExample } from "test/mocks/apis/todos/examples";
import "../../test/setup/browser";

describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173");
  });

  it("Visit todo page", function () {
    cy.visit("http://localhost:5173");
    cy.get("ul > li:first-child").should(
      "contain.text",
      `#1${getAllTodosExample[0].title}`,
    );
    cy.get("ul > li:first-child").click();
    cy.get(":nth-child(1)").should("contain.text", "1");
    cy.get(":nth-child(2)").should("contain.text", "Test Test");
    cy.get(":nth-child(3)").should("contain.text", getAllTodosExample[0].title);
  });

  it("Filter todos", function () {
    cy.visit("http://localhost:5173");
    cy.get("ul").children().should("have.length", getAllTodosExample.length);
    cy.get("ul > li:first-child").should(
      "contain.text",
      getAllTodosExample[0].title,
    );
    cy.get("ul > li:first-child").should(
      "not.contain.text",
      getAllTodosExample[3].title,
    );
    cy.get("#todos-filter").type(getAllTodosExample[3].title);
    cy.get("ul").children().should("have.length", 1);
    cy.get("ul > li:first-child").should(
      "not.contain.text",
      getAllTodosExample[0].title,
    );
    cy.get("ul > li:first-child").should(
      "contain.text",
      getAllTodosExample[3].title,
    );
    cy.get("#todos-filter").clear();
    cy.get("ul").children().should("have.length", getAllTodosExample.length);
  });
});
