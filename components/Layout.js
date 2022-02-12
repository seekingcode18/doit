import Header from '@/components/Header'

export default function Layout({title, children}) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
