const frogJumps = (start, end, jLength) => {
  if (jLength == null || start == null || end == null) {
    throw new Error("Parameters are missing");
  } else if (
    typeof jLength != "number" ||
    typeof start != "number" ||
    typeof end != "number"
  ) {
    throw new Error("Parameters are not numbers");
  } else if (jLength === 0) {
    throw new Error("Jump length needs to be 0");
  }
  const distance = end - start;
  if (start >= end) {
    return 0;
  } else {
    return Math.ceil(distance / jLength);
  }
};
module.exports = frogJumps;
