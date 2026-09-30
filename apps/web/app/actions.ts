'use server';

import { revalidatePath } from 'next/cache';
import { api } from '@/lib/api';

export async function createItem(formData: FormData) {
  const title = String(formData.get('title') ?? '').trim();
  const description = String(formData.get('description') ?? '').trim() || undefined;
  if (!title) return;
  await api('/items', { method: 'POST', body: JSON.stringify({ title, description }) });
  revalidatePath('/');
}

export async function deleteItem(id: number) {
  await api(`/items/${id}`, { method: 'DELETE' });
  revalidatePath('/');
}
