export {};

describe("Registration App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the registration page", () => {
    cy.get("h1").contains("Registration Form");
    cy.get("h2").contains("Please enter your Information");
  });

  it("should should have 4 form fields", () => {
    cy.get("ul").first().children().should("have.length", 4);
  });

  it("should have fill all fields until last page", () => {
    const name = "My Full Name";
    cy.get("ul>li>label").first().should("contain", "Full name  *");
    cy.get("input#name").type(name).should("have.value", name);

    // click next
    cy.get(".buttons-control>button").first().next().click();
    cy.wait(500);

    const email = "myemail@gmail.com";
    cy.get("ul>li:nth-child(2)>label").should("contain", "Email  * ");
    cy.get("input#email").type(email).should("have.value", email);

    //  click next
    cy.get(".buttons-control>button").first().next().click();
    cy.wait(500);

    const phone = "18272636";
    cy.get("ul>li:nth-child(3)>label").should("contain", "Phone Number  * ");
    cy.get("input#phone").type(phone).should("have.value", phone);

    // click next
    cy.get(".buttons-control>button").first().next().click();
    cy.wait(500);

    cy.get("ul>li:nth-child(4)>label").should(
      "contain",
      "Salary Indication  * "
    );
    cy.get(".radio-group>.radio-wrapper").first().click();
  });

  it("should have fill all fields and submit", () => {
    const name = "My Full Name";
    cy.get("ul>li>label").first().should("contain", "Full name  *");
    cy.get("input#name").type(name).should("have.value", name);

    // click next
    cy.get(".buttons-control>button").first().next().click();
    cy.wait(500);

    const email = "myemail@gmail.com";
    cy.get("ul>li:nth-child(2)>label").should("contain", "Email  * ");
    cy.get("input#email").type(email).should("have.value", email);

    //  click next
    cy.get(".buttons-control>button").first().next().click();
    cy.wait(500);

    const phone = "18272636";
    cy.get("ul>li:nth-child(3)>label").should("contain", "Phone Number  * ");
    cy.get("input#phone").type(phone).should("have.value", phone);

    // click next
    cy.get(".buttons-control>button").first().next().click();
    cy.wait(500);

    cy.get("ul>li:nth-child(4)>label").should(
      "contain",
      "Salary Indication  * "
    );
    cy.get(".radio-group>.radio-wrapper").first().click();

    // click next
    cy.get(".buttons-control>button").first().next().click();
    cy.wait(500);
  });

  it("should have fill all fields and get to result page with correct data", () => {
    const name = "My Full Name";
    cy.get("ul>li>label").first().should("contain", "Full name  *");
    cy.get("input#name").type(name).should("have.value", name);

    // click next
    cy.get(".buttons-control>button").first().next().click();
    cy.wait(500);

    const email = "myemail@gmail.com";
    cy.get("ul>li:nth-child(2)>label").should("contain", "Email  * ");
    cy.get("input#email").type(email).should("have.value", email);

    //  click next
    cy.get(".buttons-control>button").first().next().click();
    cy.wait(500);

    const phone = "18272636";
    cy.get("ul>li:nth-child(3)>label").should("contain", "Phone Number  * ");
    cy.get("input#phone").type(phone).should("have.value", phone);

    // click next
    cy.get(".buttons-control>button").first().next().click();
    cy.wait(500);

    cy.get("ul>li:nth-child(4)>label").should(
      "contain",
      "Salary Indication  * "
    );
    cy.get(".radio-group>.radio-wrapper").first().click();

    // click next
    cy.get(".buttons-control>button").first().next().click();
    cy.wait(500);

    cy.get("h1").contains("Thank you for registering");
    cy.get(".value").first().contains("My Full Name");
    cy.get(".value:nth-child(2)").contains("myemail@gmail.com");
  });

  it("should have fill except email fields and validate", () => {
    const name = "My Full Name";
    cy.get("ul>li>label").first().should("contain", "Full name  *");
    cy.get("input#name").type(name).should("have.value", name);

    // click next
    cy.get(".buttons-control>button").first().next().click();
    cy.wait(500);

    //  click next
    cy.get(".buttons-control>button").first().next().click();
    cy.wait(500);

    const phone = "18272636";
    cy.get("ul>li:nth-child(3)>label").should("contain", "Phone Number  * ");
    cy.get("input#phone").type(phone).should("have.value", phone);

    // click next
    cy.get(".buttons-control>button").first().next().click();
    cy.wait(500);

    cy.get("ul>li:nth-child(4)>label").should(
      "contain",
      "Salary Indication  * "
    );
    cy.get(".radio-group>.radio-wrapper").first().click();

    // click next
    cy.get(".buttons-control>button").first().next().click();
    cy.wait(500);
    cy.contains("email is Required");
  });
});
