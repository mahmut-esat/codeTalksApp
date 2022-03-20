export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Invalid Email Address';
    case 'auth/email-already-exists':
      return 'Email Already Exists';
    case 'auth/weak-password':
      return 'Weak Password';
    default:
      return errorCode;
  }
}
