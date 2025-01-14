import { useParams } from 'react-router-dom'
import { type ViewPrimerRouteParams } from '../../../lib/routes'
import { trpc } from '../../../lib/trpc'
import css from './index.module.scss'

export const ViewPrimerPage = () => {
  const { primerNick } = useParams() as ViewPrimerRouteParams
  const { data, error, isLoading, isFetching, isError } = trpc.getPrimer.useQuery({
    primerNick,
  })

  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  if (!data.primer) {
    return <span>Primer not found</span>
  }

  return (
    <div>
      <h1 className={css.title}>{data.primer.name}</h1>
      <p className={css.description}>{data.primer.description}</p>
      <div className={css.text} dangerouslySetInnerHTML={{ __html: data.primer.text }} />
    </div>
  )
}
