import { expect, describe, it, beforeEach } from "vitest";
import { getUsername, saveUser } from "./storage.js";

describe("Storage functions", () => {
  beforeEach(() => {
    // Create a simple object to store our data
    const storage = {};

    // Create mock versions of the localStorage methods we need
    global.localStorage = {
      setItem: (key, value) => (storage[key] = value),
      getItem: (key) => storage[key],
    };
  });

  describe("saveUser", () => {
    it("saves a user object to storage", () => {
      const testUser = "test-user";
      saveUser(testUser);
      expect(localStorage.getItem("user")).toBe(JSON.stringify(testUser));
    });
  });

  describe("getUser", () => {
    it("retrieves the user from storage", () => {
      // Set up - directly save a user to localStorage
      localStorage.setItem("user", JSON.stringify({ name: "test-user" }));

      const retrievedUser = getUsername();
      expect(retrievedUser).toBe("test-user");
    });

    it("returns null when no user exists", () => {
      const user = getUsername();
      // Will return null because beforeEach gives us a fresh empty storage
      expect(user).toBeNull();
    });
  });
});
