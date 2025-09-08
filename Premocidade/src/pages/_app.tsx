import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head'
import ErrorBoundary from '../components/ErrorBoundary'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      console.log(`Navegando a: ${url}`)
    }

    const handleError = (error: ErrorEvent) => {
      console.error('Error:', error)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    window.addEventListener('error', handleError)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      window.removeEventListener('error', handleError)
    }
  }, [router])

  return (
    <ErrorBoundary>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}

export default MyApp
