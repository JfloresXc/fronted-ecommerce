import { createClient } from '@supabase/supabase-js'

export async function POST(request) {
  const url = 'https://nsdywnrzvkuolsbvehei.supabase.co'
  const key =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zZHl3bnJ6dmt1b2xzYnZlaGVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2MTA3ODYsImV4cCI6MjAyMzE4Njc4Nn0.JRqOtZ5i-ObgfWeVLk-hnJJWN37otng8gGHe-DYQdlc'
  const client = createClient(url, key)

  try {
    const { data } = await client.from('Rol').select('*')
    console.log('Is data', data)
    return new Response(data)
  } catch (error) {
    console.log(error)
  }

  // if (error) console.log('error', error)
  // else console.log(data)
}
