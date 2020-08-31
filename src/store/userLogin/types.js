export const USER_LOGIN = 'USER_LOGIN';
export const SAVE_USER = 'SAVE_USER';
export const RESET_USER_DATA = 'RESET_USER_DATA';

export const profileForm = [
  {
    name: 'userName',
    type: 'text',
    label: 'Your user name:',
    placeholder: 'Type your user name',
    errorMessage: 'Latin letters are allowed for the User name field'
  },
  {
    name: 'email',
    type: 'text',
    label: 'Your email:',
    placeholder: 'Type your email',
    errorMessage: 'Invalid email format'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Your password:',
    placeholder: 'Type your password',
    errorMessage: 'The password must be at least 8 characters long (at least one digit and one letter)'
  }
]
