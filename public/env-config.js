// ============================================================
//  NXQ WEB — ENV CONFIG
//  This is the ONLY file you touch to plug in your keys
//  Fill in your values below, save, deploy — done.
// ============================================================

const NXQ_CONFIG = {

  // ── SUPABASE ──────────────────────────────────────────────
  // Settings > API in your Supabase dashboard
  supabase: {
    url:     'https://sapkbhxgnxnfdxdvndfq.supabase.co',
    // Example: 'https://skpmdmikltcwyyvuatzu.supabase.co'
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhcGtiaHhnbnhuZmR4ZHZuZGZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5MTk5MjEsImV4cCI6MjA5MjQ5NTkyMX0.Hn8FW6nQaEJDIcMp84xfkX27cZK92ufeBx1KhrOeYcw
',
    // Example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
  },

  // ── PAYPAL ────────────────────────────────────────────────
  // Your PayPal.me link for client payments
  paypal: {
    meUrl: 'https://paypal.me/NXQWeb',
    // Change NXQWeb to whatever your PayPal.me username is
  },

  // ── YOUR CONTACT ──────────────────────────────────────────
  business: {
    name:  'NXQ Web',
    email: 'NXQweb@protonmail.com',
    site:  'https://nxqweb.com',
  },

  // ── PRICING ───────────────────────────────────────────────
  pricing: {
    basic:    500,
    standard: 1000,
    premium:  1500,
    monthly:  50,
  }

};

// Make available globally
window.NXQ_CONFIG = NXQ_CONFIG;
