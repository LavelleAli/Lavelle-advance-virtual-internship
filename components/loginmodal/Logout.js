'use client'

import { logout } from '@/firebase/firebase';

function Logout({ as: Tag = "button", className, children = "Logout" }) {
  return (
    <Tag className={className} onClick={() => logout()}>
      {children}
    </Tag>
  )
}

export default Logout
