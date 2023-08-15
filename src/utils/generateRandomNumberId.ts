export function generateRandomNumberId(length = 8) {
    const maxNumber = Math.pow(10, length) - 1;
    const randomNumber = Math.floor(Math.random() * maxNumber);
    return randomNumber;
  }