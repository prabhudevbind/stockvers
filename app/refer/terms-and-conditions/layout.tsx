import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">StockVerses Refer Terms & Conditions</h1>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Referral Program Terms</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Refer friends to StockVerses and earn referral rewards.</li>
          <li>Your referral amount will be credited only when your referred user participates in a contest.</li>
          <li>Referral bonus is validated and added after the referred user's first contest transaction is successful.</li>
          <li>Referral amount cannot be withdrawn directly and must be used to participate in contests.</li>
          <li>Any misuse or fraudulent activity will result in disqualification from the referral program.</li>
        </ul>
      </div>
      <div className="bg-blue-50 rounded-lg p-4 mb-8">
        <p className="text-blue-700 font-medium">Note: Referral rewards are only credited after your friend joins a contest and their transaction is validated. Simply signing up does not qualify for the referral bonus.</p>
      </div>
      <div className="text-gray-600 text-sm mb-8">
        <p>For more details, please read our full Terms & Conditions or contact our support team.</p>
      </div>
     
    </div>
  )
}
