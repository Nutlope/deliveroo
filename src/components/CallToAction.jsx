/* eslint-disable react/no-unescaped-entities */
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { useForm } from '@formspree/react'
import { Button } from './Button'
import { SelectField, TextField } from './Fields'

export function CallToAction() {
  const [state, handleSubmit] = useForm('xwkzlwly')
  return (
    <section
      id="feedback"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Give us your feedback today.
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mt-2 space-y-6 text-white">
              <TextField
                label="Email"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
              <TextField
                label="Feedback"
                id="feedback"
                name="text"
                type="textarea"
                autoComplete="none"
                required
              />
              <SelectField
                className="col-span-full"
                label="Are you interested in partnering with us on this idea?"
                id="interested-in-partnering"
                name="interested-in-partnering"
              >
                <option>Select one</option>
                <option>Yes, I'm interested in being a co-founder</option>
                <option>No, but I can send it to my friends</option>
                <option>No, thank you</option>
              </SelectField>
            </div>
            <Button
              type="submit"
              color="cyan"
              className="mt-8 w-1/2"
              disabled={state.submitting}
            >
              Submit form
            </Button>
            {state.succeeded && (
              <div className="text-white">Thanks for submitting!</div>
            )}
          </form>
        </div>
      </Container>
    </section>
  )
}
