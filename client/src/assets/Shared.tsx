export const isMobile = window.innerWidth < 768;

export const Shared = {
  Text: {
    xxl: isMobile ? "1.2rem" : "2.2rem",
    xl: isMobile ? "1rem" : "2rem",
    large: isMobile ? "0.8rem" : "1.2rem",
    small: isMobile ? "0.6rem" : "0.8rem",
  },
};

export const url = 'http://localhost:3000/api'

export const characters = /[`!@#$%^&*()_+\-={};':"\\|,.<>/?~]/;
