export const formValidationMessages = {
  required: "Bu alan gerekli",
  onlyChars: "Bu alan yalnızca harf içermeli",
  minLength: (number: number) => `Bu alan en az ${number} karakter içermeli`,
  maxLength: (number: number) => `Bu alan en çok ${number} karakter içermeli`,
  min: (number: number) => `Bu alan en az ${number} olmalıdır`,
  max: (number: number) => `Bu alan en çok ${number} olmalıdır`,
};
