/**
 * @function creates a query string from query object
 * @description The createQueryString function takes a query object
 *  and returns a query string
 * @param {*} queryObject
 * @returns QueryString
 */
export function createQueryString(queryObject = {}) {
  let queryString = Object.keys(queryObject)
    .filter(
      (key) =>
        queryObject[key] &&
        !(Array.isArray(queryObject[key]) && !queryObject[key].length)
    )
    .map((key) => {
      return Array.isArray(queryObject[key])
        ? queryObject[key]
            .map(
              (item) => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`
            )
            .join("&!")
        : `${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key])}`;
    })
    .join("&!");
  return queryString ? `?${queryString}` : "";
}

/**
 * @function  turns query string back into an object
 * @description The queryStringToObject function takes a query string and an options object
 *  that tells it the default values (if no values are in the query string) - this is needed
 *  so the function knows the type of value. Which is especially useful when we want to use
 *  arrays or number values.
 * @param {*} queryString
 * @param {*} options
 * @returns queryObject
 */
export function queryStringToObject(queryString = "", options = {}) {
  let queryObject = {};
  queryString &&
    decodeURIComponent(queryString.replace("?", ""))
      .split("&!")
      .map((itemString) => {
        let [itemKey, itemValue] = itemString.split("=");
        if (options.hasOwnProperty(itemKey)) {
          if (!queryObject[itemKey] && Array.isArray(options[itemKey])) {
            queryObject[itemKey] = [];
          }
          Array.isArray(options[itemKey])
            ? queryObject[itemKey].push(itemValue)
            : (queryObject[itemKey] =
                typeof options[itemKey] === "number"
                  ? parseFloat(itemValue)
                  : itemValue);
        }
      });
  return queryObject;
}

/**
 * @function saveToLocalStorage
 * @description This method turns user object into json string and saves it to local storage
 * @param {*} user
 * @param {string} key
 * @returns null
 */
export const saveToLocalStorage = (user, key) => {
  localStorage.setItem(key, JSON.stringify(user));
};

/**
 * @function getFromLocalStoreage
 * @description This method turns  local storage json string into user object
 * @param {string} key
 * @returns User
 */

export const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

/**
 * @function currencyConverter
 * @description This method convert product currency price into app currency price
 * @param {number} price
 * @param
 * @returns price String
 */
export function currencyConverter(price, currency) {
  const newPrice = Number(price) * currency.valueToDoller;
  return `${currency.symbol} ${Math.round(newPrice)} `;
}
