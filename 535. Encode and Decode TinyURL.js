/**
 * Created by Yuri on 17/9/15.
 */

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
let dist = {}
var encode = function(longUrl) {
    let key = Date.now().toString(36)
    dist[key] = longUrl
    return "http://tinyurl.com/" + key
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    let key = shortUrl.split("/")
    return dist[key[key.length - 1]]
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
