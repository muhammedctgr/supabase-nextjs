import type { NextPage } from 'next'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <div className="row">
          <div className="col-6">
            <h1 className="header">Next.js Supabase Auth + Storage</h1>
            <p className="">
              Experience my Auth and Storage through a simple profile management example. Create a
              user profile and upload an avatar image. Fast, easy, secure.
            </p>
          </div>
          <div className="col-6 auth-widget">
            <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
          </div>
        </div>
      ) : (
        <>
          <h3>Account</h3>
          <Account session={session} />
        </>
      )}

      <Footer />
    </div>
  )
}

export default Home