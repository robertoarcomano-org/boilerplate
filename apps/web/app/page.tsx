import { api, type Item } from '@/lib/api';
import { createItem, deleteItem } from './actions';
import { siteTitle } from './metadata';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const items = await api<Item[]>('/items');

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="mb-16 text-2xl text-center font-semibold">{siteTitle}</h1>
      <h1 className="mb-6 text-xl font-semibold">Items</h1>

      <form action={createItem} className="mb-8 flex flex-col gap-2 sm:flex-row">
        <input
          name="title"
          required
          placeholder="Titolo"
          className="flex-1 rounded border border-zinc-300 px-3 py-2 focus:outline-2 focus:outline-blue-600"
        />
        <input
          name="description"
          placeholder="Descrizione (opzionale)"
          className="flex-1 rounded border border-zinc-300 px-3 py-2 focus:outline-2 focus:outline-blue-600"
        />
        <button className="btn">
          Aggiungi
        </button>
      </form>

      {items.length === 0 ? (
        <p className="text-zinc-500">Nessun item. Aggiungine uno qui sopra.</p>
      ) : (
        <ul className="divide-y divide-zinc-200">
          {items.map((item) => (
            <li key={item.id} className="flex items-start justify-between gap-4 py-3">
              <div>
                <p className="font-medium">{item.title}</p>
                {item.description && <p className="text-sm text-zinc-600">{item.description}</p>}
              </div>
              <form action={deleteItem.bind(null, item.id)}>
                <button className="btn-warning">Elimina</button>
              </form>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
