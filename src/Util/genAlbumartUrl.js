/**
 * Generate hi-res picture url
 * @param {String} url
 * @param {String} dimensions
 * @returns {String}
 */
export default function (url, dimensions) {
  return String(url).replace("100x100", dimensions);
}
