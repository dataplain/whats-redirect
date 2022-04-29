import NumberFormatter from "./NumberFormatter";

function PhoneNumberFormatter(phoneNumber) {
  const checkNumber = NumberFormatter(phoneNumber);
    
  if (checkNumber.length === 10)
    return checkNumber.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
  else if (checkNumber.length === 11)
    return checkNumber.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  else
    return checkNumber;
}

export default PhoneNumberFormatter;
