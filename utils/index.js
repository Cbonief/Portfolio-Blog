export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function makeArr(startValue, stopValue, cardinality) {
  var arr = [];
  var step = (stopValue - startValue) / (cardinality - 1);
  for (var i = 0; i < cardinality; i++) {
    arr.push(startValue + (step * i));
  }
  return arr;
}

export function transformAnchortoNextLink(htmlContent) {
  // Replace <a> tags with <PlaceholderLink> tags.
  return htmlContent.replace(/<a href="(.*?)">(.*?)<\/a>/g, '<PlaceholderLink href="$1">$2</PlaceholderLink>');
}
