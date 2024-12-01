import run from "aocrunner";

const parseInput = (rawInput: string) => {
  return rawInput
    .split("\n")
    .map((line) => line.trim().split(/\s+/).map(Number));
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const [v1, v2] = input.reduce(
    (acc, [a, b]) => {
      acc[0].push(a);
      acc[1].push(b);
      return acc;
    },
    [[], []] as [number[], number[]],
  );
  v1.sort((a, b) => a - b);
  v2.sort((a, b) => a - b);

  const distance = v1.reduce((acc, a, i) => acc + Math.abs(v2[i] - a), 0);

  return distance;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const [v1, v2] = input.reduce(
    (acc, [a, b]) => {
      acc[0].push(a);
      acc[1].push(b);
      return acc;
    },
    [[], []] as [number[], number[]],
  );

  const occurrences = v1.reduce((acc, a) => {
    const count = v2.filter((b) => b === a).length;
    return acc + a * count;
  }, 0);

  return occurrences;
};

run({
  part1: {
    tests: [
      {
        input: `3   4
                4   3
                2   5
                1   3
                3   9
                3   3`,
        expected: 11,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `3   4
                4   3
                2   5
                1   3
                3   9
                3   3`,
        expected: 31,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
