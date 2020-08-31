const formElementsRegexp = {
  userName: /[a-zA-Z]/,
  email: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
  password: /^(?=.*[0-9])(?=.*[a-z]).{8,32}$/
}

export const validation = (targetName, value) => {
  return formElementsRegexp[targetName].test(value);
}