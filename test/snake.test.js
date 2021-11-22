import {makeSnake} from "../src/index"

test('create snake_case from snake case', () => {
  expect(makeSnake("snake case")).toBe("snake_case");
});

test('create a failed snake-case from snake case', () => {
    expect(makeSnake("snake case")).not.toBe("snake-case");
  });

test('create snake_case___ from snake case', () => {
    expect(makeSnake("snake case   ")).not.toBe("snake_case___");
  });