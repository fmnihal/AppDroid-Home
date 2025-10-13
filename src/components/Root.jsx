import { Outlet } from 'react-router'
import Footer from './components/Footer'
import Header from './components/Header'

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