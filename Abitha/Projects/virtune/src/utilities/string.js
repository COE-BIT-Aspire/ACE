//to calculation the total duration of the playlist and update

export function checkPlural(word) {
  const string = Object.keys(word);
  const value = word[string];
  return value > 0 && `${value} ${string}${value > 1 ? 's' : ''}`;
}
