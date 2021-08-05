import { useSession } from "next-auth/client";
import { useState } from "react";

export default function Code() {
  const [session, loading] = useSession();

  if (session) {
    return <code>hi</code>
  }
  let [open, setOpen] = useState(false)
  return (
    <>
      <code style={{cursor: 'pointer'}} onClick={() => setOpen(true)}>👁 Reveal Code 👁</code>
      <style>
      {`
        .hidden-at-first{
          display: ${open ? 'flex' : 'none'}!important
        }
        `}
      </style>
    </>
  );
}
