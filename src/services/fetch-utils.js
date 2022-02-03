import { checkError, client } from './client';

export async function getDrums() {
  const response = await client
    .from('drums')
    .select();

  return checkError(response);
}