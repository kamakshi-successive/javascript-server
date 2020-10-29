export default function validateEmail(Email) {

  const RegExp = '^[a-zA-Z0-9+_.-]+@successive.tech+$';
  const str = Boolean( Email.match(RegExp));
  return str;
  }
