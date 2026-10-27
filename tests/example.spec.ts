import { test, expect } from '@playwright/test';

test('create a new pet', async ({ request }) => {

  const newPet = {
    name: "Bingo3",
    type: "Perro",
    age: 1
  }

  const newPetResponse = await request.post('/pets', {
    data: newPet
  });

  console.log(JSON.stringify(await newPetResponse.json()))
  expect(newPetResponse.ok()).toBeTruthy();

});