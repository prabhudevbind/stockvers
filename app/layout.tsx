import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "StockVerses - Real-Time Stock Trading Simulation",
  description:
    "Master real-time stock trading without risk. Trade with live market data, compete in contests, and win real prizes on India's premier stock trading simulation platform.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="StockVerses, Real-Time Stock Trading Simulation, How It Works, Features, Contests, Contact, Start Trading, Live Market Data, Virtual Trading, Trading Contests, Win Prizes, Portfolio Value, Leaderboard, NSE, BSE, Zero Risk Trading, Cash Prizes, Daily Contests, Weekly Contests, Live Leaderboards, Trading Platform India" />
        <meta name="author" content="StockVerses" />
        <meta property="og:title" content="StockVerses - Real-Time Stock Trading Simulation" />
        <meta property="og:description" content="Master real-time stock trading without risk. Trade with live market data, compete in contests, and win real prizes on India's premier stock trading simulation platform." />
        <meta property="og:image" content="/placeholder-logo.png" />
        <meta property="og:url" content="https://stockverses.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="StockVerses - Real-Time Stock Trading Simulation" />
        <meta name="twitter:description" content="Experience live market trading with virtual money. Trade real stocks with real-time data, compete in contests, and win prizes - all without risking your actual money." />
        <meta name="twitter:image" content="/placeholder-logo.png" />
        <link rel="icon" type="image/png" href="/placeholder-logo.png" />
        <link rel="icon" type="image/svg+xml" href="/placeholder-logo.svg" />
        <link rel="apple-touch-icon" href="/placeholder-logo.png" />
        <link rel="shortcut icon" href="/placeholder-logo.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>StockVerses - Real-Time Stock Trading Simulation</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
