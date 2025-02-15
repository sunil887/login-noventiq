const isPublicDomainEmail = (email: string): boolean => {
  const publicDomainEmailSuffixes = ['gmail.com', 'outlook.com'];

  if (!email) return false;

  const tokens = email.split('@');
  if (tokens && tokens[1]) {
    return publicDomainEmailSuffixes.includes(tokens[1]);
  }

  return false;
};

const isCorporateDomainEmail = (email: string): boolean => {
  const corporateDomainEmailSuffixes = ['noventiq.com', 'spglobal.com', 'microsoft.com'];

  if (!email) return false;

  const tokens = email.split('@');
  if (tokens && tokens[1]) {
    return corporateDomainEmailSuffixes.includes(tokens[1]);
  }

  return false;
};

export const checkIsValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email) || isPublicDomainEmail(email) || !isCorporateDomainEmail(email)) {
    return false;
  }

  return true;
};
