const sanitizeString = (str) => {
  if (!str) return '';
  
  // Remove special characters but keep alphanumeric, spaces, and basic punctuation
  return str
    .replace(/[^\w\s-.,&()]/g, '') // Remove special characters except those in brackets
    .trim(); // Remove leading/trailing whitespace
};

export { sanitizeString };