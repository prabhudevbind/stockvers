import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Users,
  Trophy,
  Activity,
  BarChart3,
  Target,
  Zap,
  Clock,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                StockVerses
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#how-it-works"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="#features"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#contests"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contests
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </Link>
               <Link
              href="https://trade.stockverses.com/login"
              className="w-full sm:w-auto"
            >
              <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                Start Trading
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-100">
              🚀 Real-Time Stock Trading Simulation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Master Real-Time Trading
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Without Real Risk
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience live market trading with virtual money. Trade real
              stocks with real-time data, compete in contests, and win prizes -
              all without risking your actual money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
              href="https://trade.stockverses.com/login"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                Get Trading Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              </Link>
              <Link
              href="https://t.me/stockversesk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 border-blue-300 hover:bg-blue-50 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-blue-500"><path d="M21.426 2.594a2.25 2.25 0 0 0-2.37-.36L3.6 9.13c-1.5.63-1.47 2.77.04 3.34l3.7 1.36 1.42 4.54c.41 1.32 2.08 1.53 2.7.32l2.02-3.93 4.13 3.04c1.13.83 2.75.23 3.08-1.13l2.13-8.6a2.25 2.25 0 0 0-.89-2.39ZM8.7 13.6l7.13-6.36c.18-.16.44.07.32.27l-5.1 8.13c-.13.21-.44.17-.5-.07l-1.85-6.01Z"/></svg>
                Join Private Community
              </Button>
            </Link>
            </div>
          </div>
        </div>

        {/* Real-time Trading Dashboard Preview */}
        <div className="mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card className="border-green-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                      Portfolio Value
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">
                      ₹1,25,430
                    </div>
                    <div className="text-sm text-green-500 flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +12.5% today
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-blue-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center">
                      <Trophy className="w-5 h-5 mr-2 text-blue-600" />
                      Contest Rank
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">#3</div>
                    <div className="text-sm text-gray-500">
                      of 1,247 traders
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-purple-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center">
                      <Activity className="w-5 h-5 mr-2 text-purple-600" />
                      Active Trades
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-600">8</div>
                    <div className="text-sm text-gray-500">Live positions</div>
                  </CardContent>
                </Card>
              </div>

              {/* Live Stock Ticker */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">
                    Live Market Data
                  </h3>
                  <div className="flex items-center text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                    <span className="text-sm">Live</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">RELIANCE</span>
                    <span className="text-green-600 font-medium">
                      ₹2,847.50 ↗
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">TCS</span>
                    <span className="text-green-600 font-medium">
                      ₹3,456.20 ↗
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">HDFC</span>
                    <span className="text-red-600 font-medium">
                      ₹1,678.90 ↘
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">INFY</span>
                    <span className="text-green-600 font-medium">
                      ₹1,789.45 ↗
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How StockVerses Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start your real-time trading journey in minutes with our simple
              process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Create Account",
                description:
                  "Sign up and get instant access to your trading dashboard with virtual money",
                icon: Users,
              },
              {
                step: "02",
                title: "Real-Time Trading",
                description:
                  "Trade live stocks with real market data using virtual money - no risk involved",
                icon: Activity,
              },
              {
                step: "03",
                title: "Join Contests",
                description:
                  "Participate in daily and weekly trading contests with other skilled traders",
                icon: Trophy,
              },
              {
                step: "04",
                title: "Win Prizes",
                description:
                  "Top performers earn real cash prizes and recognition on our leaderboards",
                icon: Target,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="relative border-2 border-gray-100 hover:border-green-200 transition-colors"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-green-600 mb-2">
                    STEP {item.step}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section
        id="features"
        className="py-20 bg-gradient-to-br from-green-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose StockVerses?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience professional-grade trading simulation with real-time
              market data and competitive contests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Real-Time Data",
                description:
                  "Trade with live market prices and real-time stock movements from NSE & BSE",
                icon: Clock,
                color: "from-green-500 to-emerald-600",
              },
              {
                title: "Zero Risk Trading",
                description:
                  "Practice with virtual money - learn and improve without any financial risk",
                icon: Shield,
                color: "from-blue-500 to-cyan-600",
              },
              {
                title: "Live Market Simulation",
                description:
                  "Experience authentic trading with real market conditions and price movements",
                icon: BarChart3,
                color: "from-purple-500 to-violet-600",
              },
              {
                title: "Cash Prizes",
                description:
                  "Win real money in trading contests based on your performance and skills",
                icon: Trophy,
                color: "from-yellow-500 to-orange-600",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Contests */}
      <section id="contests" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Daily Trading Contests
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Compete with skilled traders in our daily contests. Use your
                trading expertise to climb the leaderboard and win real cash
                prizes. No real investment required - just skill and strategy.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Daily & Weekly Contests
                    </h3>
                    <p className="text-gray-600">
                      Multiple contests running every day when markets are open
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Real Cash Prizes
                    </h3>
                    <p className="text-gray-600">
                      Top performers win actual money based on their P&L
                      performance
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Live Leaderboards
                    </h3>
                    <p className="text-gray-600">
                      Track your ranking in real-time throughout the trading day
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                Join Today's Contest
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Today's Contest Leaderboard
              </h3>
              <div className="space-y-4">
                {[
                  {
                    rank: 1,
                    name: "Rajesh Kumar",
                    profit: "+₹15,420",
                    badge: "🥇",
                  },
                  {
                    rank: 2,
                    name: "Priya Sharma",
                    profit: "+₹12,890",
                    badge: "🥈",
                  },
                  {
                    rank: 3,
                    name: "Amit Patel",
                    profit: "+₹11,250",
                    badge: "🥉",
                  },
                  {
                    rank: 4,
                    name: "Sneha Gupta",
                    profit: "+₹9,870",
                    badge: "4th",
                  },
                  {
                    rank: 5,
                    name: "Vikram Singh",
                    profit: "+₹8,640",
                    badge: "5th",
                  },
                ].map((trader) => (
                  <div
                    key={trader.rank}
                    className="flex items-center justify-between bg-white rounded-lg p-4"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{trader.badge}</span>
                      <span className="font-medium text-gray-900">
                        {trader.name}
                      </span>
                    </div>
                    <span className="font-semibold text-green-600">
                      {trader.profit}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Contest ends at market close • Prize pool: ₹50,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of traders who are already mastering the markets on
            StockVerses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://trade.stockverses.com/login"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100"
              >
                Get Start Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              View Live Demo
            </Button> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">StockVerses</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                The ultimate real-time stock trading simulation platform. Trade
                with live market data, compete in contests, and win real prizes
                - all without financial risk.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="hover:text-white transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contests"
                    className="hover:text-white transition-colors"
                  >
                    Contests
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                   <Link
                href="https://t.me/stockversesk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-blue-600 border-blue-300 hover:bg-blue-50 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-blue-500"><path d="M21.426 2.594a2.25 2.25 0 0 0-2.37-.36L3.6 9.13c-1.5.63-1.47 2.77.04 3.34l3.7 1.36 1.42 4.54c.41 1.32 2.08 1.53 2.7.32l2.02-3.93 4.13 3.04c1.13.83 2.75.23 3.08-1.13l2.13-8.6a2.25 2.25 0 0 0-.89-2.39ZM8.7 13.6l7.13-6.36c.18-.16.44.07.32.27l-5.1 8.13c-.13.21-.44.17-.5-.07l-1.85-6.01Z"/></svg>
                  Join Private Community
                </Button>
              </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 StockVerses. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
