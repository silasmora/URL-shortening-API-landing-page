describe("MobileMenuModal functionality", () => {
  beforeEach(() => {
    // Visit the page containing the modal component
    cy.visit("http://localhost:5173/");
  });

  it("should open and close the modal as expected", () => {
    // Step 1: Trigger the modal to open (assuming a button opens it)
    cy.get("[data-cy='open-modal-button']").click();

    // Step 2: Assert that the modal is now visible
    cy.get("[data-cy='mobile-menu-modal']").should("be.visible");

    // Step 3: Simulate clicking outside the modal
    cy.get("body").click(0, 0); // Cick on the top-left corner of the body;

    // Step 4: Assert that the modal no longer visible
    cy.get("[data-cy='mobile-menu-modal']").should("not.exist");
  });
});
