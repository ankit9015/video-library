const truncateString = (str, maxLength) => {
  return str?.length > maxLength ? str.substr(0, maxLength - 1) + "..." : str;
};

export default truncateString;
