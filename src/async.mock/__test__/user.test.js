import axios from "axios";
import { register } from "../user";
import { verifyPassword, verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", () => {
    // TODO 19: add test here
    verifyPassword.mockReturnValue(true);
    verifyUsername.mockReturnValue(true);
    axios.post.mockResolvedValue({ data: {} });

    const username = "Sunny";
    const password = "jDhl3kah342Dhll";

    register(username, password);

    expect(axios.post).toHaveBeenNthCalledWith(1, "/user", {
      username,
      password,
    });
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockReturnValue(false);
    verifyPassword.mockReturnValue(true);

    await expect(register()).rejects.toThrow("wrong username or password");
  });
});
