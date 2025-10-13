import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './Header'

function Root() {
  return (
    <>
      {/* <h1>App.jsx</h1> */}
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}
export default Root;