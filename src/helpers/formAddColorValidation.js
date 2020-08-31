const formElementsRegexp = {
  title: /[a-zA-Z0-9]+/,
  color: /^#[a-fA-F0-9]+$/,
  // password: /^(?=.*[0-9])(?=.*[a-z]).{8,32}$/
}

export const validation = (targetName, value) => {
  console.log('validation',targetName, formElementsRegexp[targetName].test(value));
  return formElementsRegexp[targetName].test(value);
}