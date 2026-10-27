import { test, expect } from '@playwright/test';

test('Debe obtener la lista de mascotas correctamente (GET /pets)', async ({ request }) => {
  // Realiza la petición GET usando la ruta relativa
  const response = await request.get('/pets');

  // 1. Validar el código de estado HTTP (200 OK)
  expect(response.status()).toBe(200);

  // 2. Convertir la respuesta a JSON
  const responseBody = await response.json();

  // Imprimimos la respuesta en consola para ver la estructura exacta
  console.log('Mascotas obtenidas:', responseBody);

  // 3. Validar si la respuesta es un array directo o un objeto con propiedad pets/data
  const petsList = Array.isArray(responseBody) ? responseBody : (responseBody.pets || responseBody.data);
  expect(Array.isArray(petsList)).toBeTruthy();
});