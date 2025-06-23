import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">StockVerses</span>
            </Link>
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Disclaimer – StockVerses</h1>
          <p className="text-lg text-gray-600">Effective Date: 20th June 2025</p>
        </div>

        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed">
            The information, services, and products provided by StockVerses (www.stockverses.com) are for educational
            and entertainment purposes only.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            By accessing or using our platform, you acknowledge and agree to the terms of this disclaimer.
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-green-600">1. Fantasy Game of Skill</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <ul className="space-y-2">
                <li>
                  StockVerses is a fantasy stock market game where users trade with virtual money based on real-time
                  stock data.
                </li>
                <li>The game is designed as a skill-based contest and not as a real stock trading platform.</li>
                <li>
                  Success in contests depends on user knowledge, analysis, and decision-making — not on luck or chance.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-green-600">2. No Real Trading or Investment</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <ul className="space-y-2">
                <li>No real stocks, shares, or securities are bought or sold on StockVerses.</li>
                <li>We do not offer stock broking, investment advice, or portfolio management services.</li>
                <li>Any similarity to actual market performance is coincidental and used purely for simulation.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-green-600">3. No Guaranteed Returns</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <ul className="space-y-2">
                <li>Participation in any contest does not guarantee winnings or profits.</li>
                <li>
                  StockVerses is not responsible for any loss of money spent on entry fees or for not winning in
                  contests.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-green-600">4. No Gambling or Betting</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <ul className="space-y-2">
                <li>StockVerses does not promote or allow gambling, betting, or any game of chance.</li>
                <li>
                  Our contests are conducted under the legal category of "Game of Skill", as defined under Indian law.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-green-600">5. Use at Your Own Risk</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <ul className="space-y-2">
                <li>Users are responsible for all actions taken on the platform.</li>
                <li>We are not liable for any damage, loss, or claim arising from use or misuse of the platform.</li>
                <li>
                  While we take all precautions to ensure fairness, we do not guarantee the platform will always
                  function without error or interruption.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-green-600">6. Third-Party Links & APIs</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <ul className="space-y-2">
                <li>StockVerses may use third-party data providers and APIs for stock price feeds.</li>
                <li>We are not liable for inaccuracies or delays caused by such external sources.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-green-600">7. Jurisdiction</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <ul className="space-y-2">
                <li>This disclaimer shall be governed by the laws of India.</li>
                <li>
                  Any disputes shall be subject to the exclusive jurisdiction of courts in Aligarh, Uttar Pradesh.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Terms & Conditions Section */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Terms & Conditions</h2>
          <p className="text-lg text-gray-600 mb-8">Effective Date: 20th June 2025</p>
          <p className="text-gray-700 mb-8">
            Welcome to StockVerses (www.stockverses.com). By accessing or using our platform, you agree to the following
            Terms and Conditions. Please read them carefully before participating in any contest.
          </p>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">1. Eligibility</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <ul className="space-y-2">
                  <li>You must be 18 years or older to use StockVerses.</li>
                  <li>By registering, you confirm that the information you provide is accurate and complete.</li>
                  <li>Users from jurisdictions where fantasy games are banned are not eligible to participate.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">2. Nature of the Platform</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <ul className="space-y-2">
                  <li>StockVerses is a fantasy stock market game based entirely on skill, knowledge, and analysis.</li>
                  <li>No real money is invested in the stock market through our platform.</li>
                  <li>All trading activity is simulated using virtual lots.</li>
                  <li>StockVerses is not a gambling or betting platform.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">3. Contests & Participation</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <ul className="space-y-2">
                  <li>Contests are available daily, on days when Indian stock markets are open.</li>
                  <li>Entry fees are variable, depending on the type of contest.</li>
                  <li>Users participate by virtually trading stocks based on live market data.</li>
                  <li>Users must not use multiple accounts.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">4. Prize Pool & Platform Fee</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <ul className="space-y-2">
                  <li>The prize pool is generated from the total amount collected via entry fees.</li>
                  <li>A flat 20% platform fee is deducted from the pool.</li>
                  <li>
                    The remaining 80% is distributed among top-ranking users based on their P&L (profit/loss) in the
                    contest.
                  </li>
                  <li>Prizes are awarded as per the final leaderboard after market close.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">5. Code of Conduct</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <ul className="space-y-2">
                  <li>Users must not cheat, manipulate trades, or exploit bugs.</li>
                  <li>Use of automated bots, scripts, or multiple accounts is strictly prohibited.</li>
                  <li>Violations may result in account suspension or termination without refund.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">6. Refund Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <ul className="space-y-2">
                  <li>Entry fees are generally non-refundable.</li>
                  <li>Refunds may be issued only if:</li>
                  <ul className="ml-6 space-y-1">
                    <li>A contest is cancelled by StockVerses.</li>
                    <li>A technical error prevents valid participation after payment.</li>
                  </ul>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">7. Account Suspension</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="mb-4">We reserve the right to suspend or terminate accounts involved in:</p>
                <ul className="space-y-2">
                  <li>Fraudulent activity</li>
                  <li>Repeated rule violations</li>
                  <li>Any action deemed harmful to the platform or other users</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="mb-4">StockVerses shall not be liable for:</p>
                <ul className="space-y-2">
                  <li>Any financial or personal losses outside the platform</li>
                  <li>Technical interruptions beyond our control</li>
                  <li>Delays in prize distribution due to unforeseen circumstances</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">9. Modifications</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <ul className="space-y-2">
                  <li>
                    Terms may be updated anytime. Users will be notified of changes via email or website announcement.
                  </li>
                  <li>Continued use of the platform implies acceptance of the updated terms.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">10. Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <ul className="space-y-2">
                  <li>These terms are governed by the laws of India.</li>
                  <li>All disputes shall fall under the jurisdiction of courts in Aligarh, Uttar Pradesh.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-xl text-green-600">📩 Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">If you have any questions or concerns, feel free to reach out to us:</p>
            <div className="space-y-2">
              <p>
                <strong>📧 Email:</strong> support@stockverses.com
              </p>
              <p>
                <strong>🌐 Website:</strong> www.stockverses.com
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Link href="/">
            <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
