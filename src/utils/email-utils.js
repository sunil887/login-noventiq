
const isPublicDomainEmail = (email) => {
  const publicDomainEmailSuffixes = ['gmail.com', 'outlook.com'];
  
  if (!email) return false
  
  if (email) {
    const tokens = email.split('@')
    if (tokens && tokens[1]) {
      return publicDomainEmailSuffixes.includes(tokens[1])
    }
  }
}

const isCorporateDomainEmail = (email) => {
  const corporateDomainEmailSuffixes = ['noventiq.com', 'spglobal.com']; // this can be a list of all supported domains
  
  if (!email) return false

  if (email) {
    const tokens = email.split('@')
    if (tokens && tokens[1]) {
      return corporateDomainEmailSuffixes.includes(tokens[1])
    }
  }
}

export const checkIsValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email) || isPublicDomainEmail(email) || !isCorporateDomainEmail(email)) {
    return false
  }

  return true;
}