  function xIsNaN(value) {
    // Necessary because non-truthy isNaN gets muddled up with truthy Strings.
    // There doesn't seem to be a built-in function to test whether a value is exactly NaN that doesn't
    // also return true for strings.
    
      function isString(value) {
        if (typeof value === 'string' || value instanceof String) {
          return true;
        } else {
          return false;
        }
      }

    if (isNaN(value)) {
      if (isString(value)) {
        return false;
      }
      return true;
    }
    return false;
  }
