'use client'
import { useRouter } from "next/navigation"
import { useState } from "react";

const ListenButton = ({ id, className, children }) => {
    const router = useRouter();
    const [premiumUser, setPremiumUser] = useState(false)

  return (
      <button className={className} onClick={() =>
      premiumUser === false
      ? router.push(`/choose-plan`)
      : router.push(`/player/${id}`)}>
        {children}
      </button>
  )
}

export default ListenButton
