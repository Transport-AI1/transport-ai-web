-- Ejecutar en Supabase > SQL Editor
create extension if not exists pgcrypto;
create table if not exists public.web_orders (
 id uuid primary key default gen_random_uuid(),
 slug text unique not null,
 status text not null default 'pending_payment',
 payload jsonb not null,
 photo_urls jsonb not null default '[]'::jsonb,
 stripe_session_id text unique,
 stripe_payment_intent text,
 generated_site jsonb,
 generated_at timestamptz,
 created_at timestamptz not null default now()
);
create index if not exists web_orders_status_idx on public.web_orders(status);
alter table public.web_orders enable row level security;
insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('web-order-photos','web-order-photos',true,5242880,array['image/jpeg','image/png','image/webp','image/gif'])
on conflict (id) do nothing;

-- Migration for temporary customer subdomains
alter table public.web_orders add column if not exists custom_domain text unique;
alter table public.web_orders add column if not exists domain_status text not null default 'not_requested';
alter table public.web_orders add column if not exists domain_verification jsonb;
