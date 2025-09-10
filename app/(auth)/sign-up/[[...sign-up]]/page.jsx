import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <SignUp
      afterSignUpUrl="/dashboard"    // redirect to your dashboard after sign up
      signInUrl="/sign-in"           // link to your custom sign-in page
    />
}