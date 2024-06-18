import { add } from './src/server';

test('adds two numbers correctly', () => {
  const result = add(2, 3);
  console.log(result);
  
  expect(result).toBe(5);
})