const Intern = require("../lib/Intern");

test("Should show Univ/School", () => {
    const testRole = "U.T. Austin";
    const e = new Intern("JohnDoe", 1, "test@test.com", testRole, "Intern");
    expect(e.school).toBe(testRole);
});

test("getRole() should return \"Intern\"", () => {
    const testRole = "Intern";
    const e = new Intern("JohnDoe", 1, "test@test.com", "University of Texas @ Austin", "Intern");
    expect(e.getRole()).toBe(testRole);
});

test("Should provide Univ/School", () => {
    const testRole = "U.T. Austin";
    const e = new Intern("JohnDoe", 1, "test@test.com", testRole, "Intern");
    expect(e.getSchool()).toBe(testRole);
});