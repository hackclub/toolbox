import "nextra-theme-docs/style.css";
import "@hackclub/theme/fonts/reg-ital-bold.css";
import "../public/style.css";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";

export default function Nextra({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          minHeight: "100vh",
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "688",
        }}
        className="hidden-at-first"
      >
        <div
          style={{
            position: "fixed",
            top: 0,
            minHeight: "100vh",
            width: "100vw",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "888",
            background:
              "linear-gradient(300deg, rgba(1,28,54,0.5480567226890756) 0%, rgba(1,28,54,0.4248074229691877) 100%)",
          }}
          className="hidden-at-first"
          onClick={() => router.replace()}
        ></div>
        <div
          style={{
            background: "white",
            minWidth: "40vw",
            maxWidth: "80vw",
            width: "400px",
            borderRadius: "0.25rem",
            padding: "24px 16px",
            textAlign: "center",
            zIndex: "999",
          }}
        >
          <h3
            style={{
              marginTop: "0rem",
              lineHeight: "1.1",
              marginBottom: "6px",
            }}
          >
            This Code Requires A Hack Club Slack Account
          </h3>
          <div>
            <code
              onClick={() => signIn("slack")}
              className="buttonAuth"
              style={{
                minWidth: "47%",
                display: "inline-block",
                marginTop: "6px",
                marginRight: "2%",
                fontFamily: `'Phantom Sans', 'Inter', system-ui, 'Helvetica Neue', Roboto,
sans-serif !important`,
                paddingLeft: "12px",
                color: "black",
                cursor: "pointer",
              }}
            >
              Login with Slack
            </code>
            <a href="https://hackclub.com/slack">
              <code
                className="buttonAuth"
                style={{
                  minWidth: "47%",
                  display: "inline-block",
                  marginTop: "6px",
                  fontFamily:
                    "'Phantom Sans', 'Inter', system-ui, 'Helvetica Neue', Roboto, sans-serif !important",
                  paddingLeft: "12px",
                  color: "black",
                }}
              >
                Create An Account
              </code>
            </a>{" "}
          </div>
        </div>
      </div>
      <style>
        {`
        
        .buttonAuth:hover {
          background: #ec3750;
          color: white!important;
        }
        .hidden-at-first{
          display: none
        }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
