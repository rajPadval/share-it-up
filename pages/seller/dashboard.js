import React from 'react'
import AdminLogin from './components/AdminLogin'
import AdminDashboard from './components/AdminDashboard'
import { useRouter } from 'next/router'

const Admin = ({adminAuth,isAdminAuth}) => {
  const router = useRouter()
  return (
    !adminAuth?  router.push("/seller-login"): <AdminDashboard adminAuth={adminAuth}  isAdminAuth={isAdminAuth}/>
//  <AdminDashboard/>
    )
}

export default Admin