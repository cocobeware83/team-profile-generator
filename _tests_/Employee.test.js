const Employee = require("../lib/Employee");

test("initiates employee line of questions", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("should set name for employee", () => {
    const name = "Cory Neel";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Should set employee ID number", () => {
    const testRole = 100;
    const e = new Employee("Cory Neel", testRole);
    expect(e.id).toBe(testRole);

});


test("Should set employee email address", () => {
    const testRole = "test@test.com";
    const e = new Employee("Cory Neel", 1, testRole);
    expect(e.email).toBe(testRole);
});

test("Should show employee name using getName", () => {
    const testRole = "Cory Neel";
    const e = new Employee(testRole);
    expect(e.getName()).toBe(testRole);
});

test("Should obtain ID using getID", () => {
    const testRole = 100;
    const e = new Employee("Cory Neel", testRole);
    expect(e.getId()).toBe(testRole);
});

test("Should obtain email getEmail", () => {
    const testRole = "test@test.com";
    const e = new Employee("Cory Neel", 1, testRole);
    expect(e.getEmail()).toBe(testRole);
});

test("getRole() should return \"Employee\"", () => {
    const testRole = "Employee";
    const e = new Employee("Cory Neel", 1, "test@test.com", "Employee");
    expect(e.getRole()).toBe(testRole);
});

test("Shoud start employee line of questioning", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("Should set email", () => {
    const testRole = "test@test.com";
    const e = new Employee("Cory Neel", 1, testRole);
    expect(e.email).toBe(testRole);
});

test("Should obtain employee name using getName", () => {
    const testValue = "Cory Neel";
    const e = new Employee(testRole);
    expect(e.getName()).toBe(testRole);
});

test("Should provide ID by using getID", () => {
    const testRole = 100;
    const e = new Employee("JohnDoe", testRole);
    expect(e.getId()).toBe(testRole);
});

test("should provide email using getEmail", () => {
    const testRole = "test@test.com";
    const e = new Employee("JohnDoe", 1, testRole);
    expect(e.getEmail()).toBe(testRole);
});

test("getRole() should return \"Employee\"", () => {
    const testRole = "Employee";
    const e = new Employee("Cory Neel", 1, "test@test.com", "Employee");
    expect(e.getRole()).toBe(testRole);
});