
export const isMobile = window.innerWidth < 768;

export const Shared = {
  Text: {
    xxl: isMobile ? "1.2rem" : "2.2rem",
    xl: isMobile ? "1rem" : "2rem",
    large: isMobile ? "0.8rem" : "1.2rem",
    small: isMobile ? "0.6rem" : "0.8rem",
  },
};

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}


export function generateRandomString(length: string | number): string {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;

  // Convert length to number if it is a string
  const len = typeof length === 'string' ? parseInt(length, 10) : length;

  // Ensure length is a positive integer
  if (isNaN(len) || len <= 0) {
    throw new Error("Length must be a positive number");
  }

  for (let i = 0; i < len; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}


export const url = 'http://localhost:3000/api'

export const characters = /[`!@#$%^&*()_+\-={};':"\\|,.<>/?~]/;
