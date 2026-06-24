'use client'
import { useRouter } from "next/navigation"

const ListenButton = ({ id, className, children }) => {
    const router = useRouter();

  return (
      <button className={className} onClick={() => router.push(`/player/${id}`)}>
        {children}
      </button>
  )
}

export default ListenButton
