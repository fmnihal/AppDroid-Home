import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './Header'

function Root() {
  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      <Header></Header>
      <main className="flex-grow">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  )
}
export default Root;