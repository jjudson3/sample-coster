import Head from 'next/head'
import SampleCostCalculator from '../src/SampleCostCalculator'
import '../src/index.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sample Cost Calculator</title>
      </Head>
      <main className="min-h-screen bg-gray-50 p-8">
        <SampleCostCalculator />
      </main>
    </div>
  )
}