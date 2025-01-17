import { zCreatePrimerTrpcInput } from '@whenuptodown/backend/src/router/createPrimer/input'
import { useFormik } from 'formik'
import { withZodSchema } from 'formik-validator-zod'
import { useState } from 'react'
import { Input } from '../../../components/Input'
import { Segment } from '../../../components/Segment'
import { Textarea } from '../../../components/Textarea'
import { trpc } from '../../../lib/trpc'

export const NewPrimerPage = () => {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false)
  const [submittingError, setSubmittingError] = useState<string | null>(null)
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
      try {
        await createPrimer.mutateAsync(values)
        formik.resetForm()
        setSuccessMessageVisible(true)
        setTimeout(() => {
          setSuccessMessageVisible(false)
        }, 3000)
      } catch (error: any) {
        setSubmittingError(error.message)
        setTimeout(() => {
          setSubmittingError(null)
        }, 3000)
      }
    },
  })

  return (
    <Segment title="New Primer">
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
        {!!submittingError && <div style={{ color: 'red' }}>{submittingError}</div>}
        {successMessageVisible && <div style={{ color: 'green' }}>Primer created successfully</div>}
        <button type="submit">
          Create Primer
          {formik.isSubmitting && <span style={{ marginLeft: 5 }}>Loading...</span>}
        </button>
      </form>
    </Segment>
  )
}
