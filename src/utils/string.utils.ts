export const splitStringUsingRegex = (sentence: string): string[] => {
  const characters: string[] = [];
  const regex = /[\s\S]/gu;

  let match: RegExpExecArray | null;
  while ((match = regex.exec(sentence)) !== null) {
    characters.push(match[0]);
  }

  return characters;
};
