import { format } from 'date-fns/format'
import { useParams } from 'react-router-dom'
import { Segment } from '../../../components/Segment'
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
    <Segment title={data.primer.name} description={data.primer.description}>
      <div className={css.createdAt}>Created At: {format(data.primer.createdAt, 'yyyy-MM-dd')}</div>
      <div className={css.text} dangerouslySetInnerHTML={{ __html: data.primer.text }} />
    </Segment>
  )
}
