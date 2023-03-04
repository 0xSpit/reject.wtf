import { Link } from 'wouter'
import { Profile } from './profile'

export const Header = () => {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <Link to="/">
          <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
            <span className="text-red-500">Reject</span>.wtf
          </h2>
        </Link>
      </div>
      <Profile />
    </div>
  )
}
