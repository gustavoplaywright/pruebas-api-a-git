import { test, expect, APIResponse } from '@playwright/test';

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

test ('Create pet y delete', async({request}) => {
  const payload = {
    name: "Bingo3",
    type: "Perro",
    age: 1
  }
let response!: APIResponse;
  let deleteResponse!: APIResponse;

  await test.step('envío de post', async() => {
  response = await request.post ('/pets', {data: payload})
})

  await test.step ('response 200', async() => {
    expect(response.status()).toBe(500)
  })
const body = await response.json()
const id = body.data.id
console.log(body.data.id)

 await test.step ('borro el creado', async () => {
   deleteResponse = await request.delete(`/pets/${id}`)
   })
 await test.step ('asercion del delete', async () => {
  expect(deleteResponse.status()).toBe(404)
})
})