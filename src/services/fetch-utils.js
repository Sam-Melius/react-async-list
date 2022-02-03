import { checkError, client } from './client';

export async function getDrums() {
  const response = await client
    .from('drums')
    .select();

  return checkError(response);
}

export async function getPets() {
  const response = await client
    .from('pets')
    .select();

  return checkError(response);
}