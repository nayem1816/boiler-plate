const isValidURL = url => {
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;

  return urlPattern.test(url);
};

module.exports = isValidURL;
