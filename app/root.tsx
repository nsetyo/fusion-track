import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import './index.css'
import { ApplicationLayout } from './application-layout'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/teams/catalyst.svg" type="image/svg+xml"></link>
        <Meta />
        <Links />
      </head>
      <body>
        <ApplicationLayout>{children}</ApplicationLayout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
