import Head from 'next/head'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'

export default function Login() {
  return (
    <>
      <Head>
        <title>Feedback Form - Deliveroo</title>
      </Head>
      <AuthLayout title="Feedback Form">
        <form>
          <div className="space-y-6">
            <TextField
              label="Email address"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <TextField
              label="Feedback"
              id="text"
              name="text"
              type="textarea"
              autoComplete="none"
              required
            />
          </div>
          <Button type="submit" color="cyan" className="mt-8 w-full">
            Submit form
          </Button>
        </form>
      </AuthLayout>
    </>
  )
}
