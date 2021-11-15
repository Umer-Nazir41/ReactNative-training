//VALIDATE EMAIL ADDRESS
export const emailValidator = val => {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
    val,
  );
};

//VALIDATE IF PASSWORD IS GREATER THEN 7 CHARACTER
export const passValidator = val => {
  if (val.length > 7) {
    return true;
  }
  return false;
};
