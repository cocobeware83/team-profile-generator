
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Should provide office number", () => {
    const testRole = 100;
    const e = new Manager("JohnDoe", 1, "test@test.com", testRole, "Manager");
    expect(e.officeNumber).toBe(testRole);
});

test("getRole() should return \"Manager\"", () => {
    const testRole = "Manager";
    const e = new Manager("JohnDoe", 1, "test@test.com", 100, "Manager");
    expect(e.getRole()).toBe(testRole);
});

test("Should provide Office Number via getOffice()", () => {
    const testRole = 100;
    const e = new Manager("JohnDoe", 1, "test@test.com", testRole, "Manager");
    expect(e.getOfficeNumber()).toBe(testRole);
});