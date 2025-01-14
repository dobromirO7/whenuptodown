import { Link, Outlet } from 'react-router-dom'
import { getAllPrimeryRoute } from '../../lib/routes'
import css from './index.module.scss'

export const Layout = () => {
  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <div className={css.logo}>PrimerNick</div>
        <ul className={css.menu}>
          <li className={css.item}>
            <Link className={css.link} to={getAllPrimeryRoute()}>
              All Primer
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  )
}
