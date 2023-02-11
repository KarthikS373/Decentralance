import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"

import Huddle01Provider from "../provider/Huddle01"
import LivepeerProvider from "../provider/Livepeer"
import WagmiProvider from "../provider/Wagmi"

import "../styles/globals.css"
import "react-toastify/dist/ReactToastify.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiProvider>
        <LivepeerProvider>
          <Huddle01Provider>
            <Component {...pageProps} />
          </Huddle01Provider>
        </LivepeerProvider>
      </WagmiProvider>
      <ToastContainer
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}
