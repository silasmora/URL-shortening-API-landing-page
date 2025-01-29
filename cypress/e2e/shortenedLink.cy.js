describe("URL Shortening Feature", () => {
  it("should shorten a valid URL", () => {
    // Visit the app's main page
    cy.visit("/");

    // Enter a valid URL
    cy.get("[data-cy='insert-link']").type("https://example.com");

    // Click the shorten button
    cy.get("[data-cy='submit-link']").click();

    // Wait for the API request to complete (adjust time as needed)
    cy.intercept("POST", "https://api.tinyurl.com/create").as("shortenRequest");
    cy.wait("@shortenRequest");

    // Verify that the shortened link appears in the UI
    cy.get("[data-cy='shortened-link']")
      .should("be.visible")
      .and("contain", "tinyurl.com");
  });

  it("Should show an error to an invalid URL", () => {
    cy.visit("/");

    cy.get("[data-cy='insert-link']").type("invalid-url");
    cy.get("[data-cy='submit-link']").click();

    cy.get("[data-cy='error-message']")
      .should("be.visible")
      .and("contain", "Please add a link");
  });
});
