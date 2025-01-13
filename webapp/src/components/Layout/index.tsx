import { Link, Outlet } from 'react-router-dom'
import { getAllPrimeryRoute } from '../../lib/routes'

export const Layout = () => {
  return (
    <div>
      <p>
        <b>PrimerNick</b>
      </p>
      <ul>
        <li>
          <Link to={getAllPrimeryRoute()}>All Primer</Link>
        </li>
      </ul>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
