export function formatPhoneNumber(phoneNumberString: string): string {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  
  // Format for Egyptian phone numbers (e.g. +20 100 000 0000)
  if (cleaned.startsWith('20') && cleaned.length === 12) {
    const match = cleaned.match(/^20(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `+20 ${match[1]}-${match[2]}-${match[3]}`;
    }
  }

  // Format local Egyptian mobile (010..., 011..., 012..., 015...)
  if (cleaned.length === 11) {
    const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
  }

  return phoneNumberString;
}
