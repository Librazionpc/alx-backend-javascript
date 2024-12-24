/**
 * Logs a message to the console.
 * @param {string} message - The message to log.
 * @returns {void}
 */
// Arrow function
function displayMessage(message)
    {
        console.log(message);
    }

/**
 * Exports the displayMessage function.
 * @module displayMessage
 * @function
 */
// Default module export.
module.exports = displayMessage;
