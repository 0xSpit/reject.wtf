import { RootNavigator } from 'navigation'
import { createRoot } from 'react-dom/client'
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'
import 'tailwindcss/tailwind.css'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider()
})

root.render(
  <WagmiConfig client={client}>
    <RootNavigator />
  </WagmiConfig>
)
