import { Link } from 'wouter'

export function Landing() {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        <span className="text-red-500">Reject</span>.wtf
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        <Link to="/dashboard">
          <button
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            onClick={() => console.log('connect wallet')}
          >
            <h3 className="text-2xl font-bold">Go to the app →</h3>
            <div className="text-lg">Start using reject.wtf</div>
          </button>
        </Link>
        <a
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="https://create.t3.gg/en/introduction"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="text-2xl font-bold">Documentation →</h3>
          <div className="text-lg">Learn more about reject.wtf</div>
        </a>
      </div>
    </div>
  )
}
