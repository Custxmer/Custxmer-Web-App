const checkPasswordStrength = (input: string) => {
  const isCapital = (capital: string) =>
    capital.charCodeAt(0) > 64 && capital.charCodeAt(0) < 91;

  const isSmall = (small: string) =>
    small.charCodeAt(0) > 96 && small.charCodeAt(0) < 123;

  const isNumber = (number: string) =>
    number.charCodeAt(0) > 47 && number.charCodeAt(0) < 58;

  if (input.length < 8) return 'Weak';
  if (
    input.length >= 8 &&
    input.split('').some((el) => isCapital(el)) &&
    input.split('').some((el) => isSmall(el)) &&
    input.split('').some((el) => isNumber(el)) &&
    input
      .split('')
      .some((el) => !isSmall(el) && !isCapital(el) && !isNumber(el))
  )
    return 'Strong';
  if (
    input.length >= 8 &&
    input.split('').some((el) => isSmall(el)) &&
    input.split('').some((el) => isCapital(el)) &&
    input.split('').some((el) => isNumber(el))
  )
    return 'Medium';
  return 'Weak';
};

export default checkPasswordStrength;
