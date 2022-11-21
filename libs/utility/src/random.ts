/**
 * generate a random number between min and max
 * @param max max bound (inclusive)
 * @param min min bound (inclusive)
 * @returns a random integer between start and end
 */
export const r_number = (max = 10, min = 1) => Math.floor(Math.random() * max) + min;
