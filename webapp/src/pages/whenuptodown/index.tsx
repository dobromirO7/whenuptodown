import { Link } from 'react-router-dom'
import { Segment } from '../../components/Segment'
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
    <Segment title="All Primery">
      <div className={css.primery}>
        {data.primery.map((primer) => (
          <div className={css.primer} key={primer.nick}>
            <Segment
              size={2}
              title={
                <Link className={css.primerLink} to={getViewPrimerRoute({ primerNick: primer.nick })}>
                  {primer.name}
                </Link>
              }
              description={primer.description}
            />
          </div>
        ))}
      </div>
    </Segment>
  )
}
