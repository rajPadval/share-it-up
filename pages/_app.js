import '@/styles/globals.css'
import { useState } from 'react'
export default function App({ Component, pageProps }) {
  const [adminAuth, isAdminAuth] = useState(false);
  return <Component {...pageProps} adminAuth={adminAuth}
  isAdminAuth={isAdminAuth} />
}
