import React from "react";

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Payment Instructions (USDT)
        </h1>

        <div className="space-y-6 text-gray-700">

          {/* Amount Section */}
          <div>
            <h2 className="text-xl font-semibold">Amount</h2>
            <p className="mt-1">Total: <strong>£1000</strong></p>
            <p>You can pay the full amount at once or split it into two payments.</p>
          </div>

          {/* ERC20 Wallet */}
          <div>
            <h2 className="text-xl font-semibold">Option 1: ERC20 (Ethereum Chain)</h2>
            <p className="mt-1 text-sm text-gray-600">Use the following wallet address:</p>
            <div className="bg-gray-100 p-3 rounded-md font-mono break-all">
              0x6A17beffBd1B44B6E9Edb31761d91943F8748584
            </div>
            <p className="mt-1 text-sm">Network: <strong>ERC20</strong></p>
          </div>

          {/* TRC20 Wallet */}
          <div>
            <h2 className="text-xl font-semibold">Option 2: TRC20 (Tron Chain)</h2>
            <p className="mt-1 text-sm text-gray-600">Use the following wallet address:</p>
            <div className="bg-gray-100 p-3 rounded-md font-mono break-all">
              TLRFxSAec7c7FSbZnNJuUMqaAy5wSb92QF
            </div>
            <p className="mt-1 text-sm">Network: <strong>TRC20</strong></p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <p>Email: <a href="mailto:brexitontravelandtours@gmail.com" className="text-blue-600 underline">brexitontravelandtours@gmail.com</a></p>
            <p>Phone/WhatsApp: <a href="tel:+447587559462" className="text-blue-600 underline">+44 7587 559462</a></p>
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-xl font-semibold">What to Do After Payment</h2>
            <ol className="list-decimal list-inside space-y-1">
              <li>Send proof of payment (screenshot or transaction ID).</li>
              <li>Mention which network you used (ERC20 or TRC20).</li>
              <li>Include your full name and purpose of payment.</li>
              <li>Send via email or WhatsApp using the contact details above.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
