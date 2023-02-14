import React from 'react'

export default function Alert({ children }) {
  return (
    <React.Fragment>
      <style jsx>{`
        .alert {
          background: rgba(255, 250, 240, 1);
          padding: 8px;
          border-radius: 0.5rem;
          color: rgba(156, 66, 33, 1);
          margin-top: 0.5rem;
          padding: 0.1rem 1rem;
        }
      `}</style>
      <div className="alert">{children}</div>
    </React.Fragment>
  )
}
