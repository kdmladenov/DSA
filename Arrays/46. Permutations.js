// https://leetcode.com/problems/permutations/description/

const permute = (choices, temp = [], permutations = []) => {
  if (choices.length === 0) permutations.push(temp);

  for (let i = 0; i < choices.length; i++) {
    let newChoices = choices.filter((_, index) => index !== i); // Create new array without current letter

    permute(newChoices, [...temp, choices[i]], permutations);
  }

  return permutations;
};
