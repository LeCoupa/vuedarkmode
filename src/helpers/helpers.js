/**************************************************************************
 * EXPORTS
 ***************************************************************************/

// Generate unique numbers
// However, note that such values are not genuine GUIDs.
// https://stackoverflow.com/a/105074/1649372
export const generateUUID = function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }

  return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4()
}
