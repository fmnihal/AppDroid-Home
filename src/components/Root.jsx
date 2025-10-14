import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './Header'

function Root() {
  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      {/* <h1>App.jsx</h1> */}
      <Header></Header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  )
}
export default Root;