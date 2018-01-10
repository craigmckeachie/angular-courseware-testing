import { CharacterLengthPipe } from "./character-length.pipe";

describe("CharacterLengthPipe", () => {
  const pipe = new CharacterLengthPipe();

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("truncates string at given lenght", () => {
    expect(pipe.transform("abc", 2)).toBe("ab");
  });

  it("returns same string if length is shorter", () => {
    expect(pipe.transform("ab", 2)).toBe("ab");
  });
});
