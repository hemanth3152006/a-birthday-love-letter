# A Birthday Love Letter

hyy lovelyy , i want to create fentabula webpage for my gf birthday but its an one sidede love soo while wishing her with that another i have to exprtess my one side love aLSO sooo make itt sasome

.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Website feedback storage

Feedback is saved to a `website_feedback` table in Supabase; it is not emailed. Create a Supabase project, then run this SQL in its SQL Editor:

```sql
create table public.website_feedback (
  id uuid primary key default gen_random_uuid(),
  answer text not null check (answer in ('yes', 'not-yet')),
  message text not null check (char_length(btrim(message)) between 1 and 2000),
  created_at timestamptz not null default now()
);

alter table public.website_feedback enable row level security;
grant usage on schema public to anon;
grant insert on public.website_feedback to anon;

create policy "Anyone can submit website feedback"
  on public.website_feedback
  for insert to anon
  with check (
    answer in ('yes', 'not-yet')
    and char_length(btrim(message)) between 1 and 2000
  );
```

Copy `.env.example` to `.env.local` and set `SUPABASE_URL` to your project's URL and `SUPABASE_PUBLISHABLE_KEY` to its publishable (or legacy anon) key. Restart the dev server. For deployment, configure those same server-side environment variables with your hosting provider. Do not prefix them with `VITE_` or commit `.env.local`. Read feedback in Supabase's Table Editor; the public policy allows inserts only, not public reads.
