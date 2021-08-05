import { useSession } from "next-auth/client";
import { useState } from "react";
import useSWR from 'swr'

export default function Code(props) {
  console.log(props)
  const [session, loading] = useSession();
  let [open, setOpen] = useState(false);
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR(`/api/${props.children}`, fetcher, {initialData: {key: 'Loading...'}})
  if (session) {
    return <code>{data.key}</code>;
  }

  return (
    <>
      <code style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
        👁 Reveal Code 👁
      </code>
      <style>
        {`
        .hidden-at-first{
          display: ${open ? "flex" : "none"}!important
        }
        `}
      </style>
    </>
  );
}
