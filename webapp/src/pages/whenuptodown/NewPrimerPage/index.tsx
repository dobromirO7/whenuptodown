import { zCreatePrimerTrpcInput } from '@whenuptodown/backend/src/router/createPrimer/input'
import { useFormik } from 'formik'
import { withZodSchema } from 'formik-validator-zod'
import { Input } from '../../../components/Input'
import { Segment } from '../../../components/Segment'
import { Textarea } from '../../../components/Textarea'
import { trpc } from '../../../lib/trpc'

export const NewPrimerPage = () => {
  const createPrimer = trpc.createPrimer.useMutation()
  const formik = useFormik({
    initialValues: {
      name: '',
      nick: '',
      description: '',
      text: '',
    },
    validate: withZodSchema(zCreatePrimerTrpcInput),

    onSubmit: async (values) => {
      await createPrimer.mutateAsync(values)
    },
  })

  return (
    <Segment title="New Primer">
      {/* Это компонент  */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          formik.handleSubmit()
        }}
      >
        <Input name="name" label="Name" formik={formik} />
        <Input name="nick" label="Nick" formik={formik} />
        <Input name="description" label="Description" formik={formik} />
        <Textarea name="text" label="Text" formik={formik} />
        {!formik.isValid && !!formik.submitCount && <div style={{ color: 'red' }}>Some fields are invalid</div>}
        <button type="submit">Create Primer</button>
      </form>
    </Segment>
  )
}
