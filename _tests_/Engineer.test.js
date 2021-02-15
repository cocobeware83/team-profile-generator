const Engineer = require("../lib/Engineer");

test("This should show GitHub account", () => {
    const testRole = "GitHubUser";
    const e = new Engineer("JohnDoe", 1, "test@test.com", testRole, "Engineer");
    expect(e.github).toBe(testRole);
});

test("getRole() should return \"Engineer\"", () => {
    const testRole = "Engineer";
    const e = new Engineer("JohnDoe", 1, "test@test.com", "GitHubUser", "Engineer");
    expect(e.getRole()).toBe(testRole);
});

test("This should show GitHUb account via getGithub()", () => {
    const testRole = "GitHubUser";
    const e = new Engineer("JohnDoe", 1, "test@test.com", testRole, "Engineer");
    expect(e.getGithub()).toBe(testRole);
});