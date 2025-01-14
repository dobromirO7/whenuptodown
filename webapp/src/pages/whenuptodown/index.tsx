import { Link } from 'react-router-dom'
import { getViewPrimerRoute } from '../../lib/routes'
import { trpc } from '../../lib/trpc'
import css from './index.module.scss'

export const AllPrimeryPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getPrimery.useQuery()

  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <h1 className={css.title}>All primery</h1>
      <div className={css.primery}>
        {data.primery.map((primer) => (
          <div className={css.primer} key={primer.nick}>
            <h2 className={css.primerName}>
              <Link className={css.primerLink} to={getViewPrimerRoute({ primerNick: primer.nick })}>
                {primer.name}
              </Link>
            </h2>
            <p className={css.primerDescription}>{primer.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
