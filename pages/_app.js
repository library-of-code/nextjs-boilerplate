import { Provider } from 'next-auth/client'
import { SWRConfig } from 'swr'
import { get } from '../utils/axios'

import '../styles/globals.css'
import "../styles/antd.less";
const fetcher = (...args) => fetch(...args).then((res) => res.json())

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </Provider>
  )
}

export default MyApp
