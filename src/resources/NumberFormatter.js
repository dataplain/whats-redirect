function NumberFormatter(value) {
  return value.replace(/[^\d]/g, "");
}

export default NumberFormatter;
