import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SearchBar from '../components/UI/molecules/SearchBar'
import ContactList from '../components/UI/organisms/ContactList'

const contacts = [
  { name: "Bob", email: "bob@email.com", birthday: "01/01/2021" },
  { name: "Alan", email: "alan@email.com", birthday: "01/01/2021" },
  { name: "Juliette", email: "juliette@email.com", birthday: "09/09/2021" },
];

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">

        <SearchBar />
        <ContactList contacts={contacts} />
        
      </main>
    </div>
  )
}

export default Home
