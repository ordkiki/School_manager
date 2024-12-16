import Eleves from '../components/Eleves/Eleves'
import Sidebar from '../components/Sidebar'
function Dashboard() {
  return (
    <>
      <div className='relative flex  w-screen overflow-x-hidden'>
        <Eleves></Eleves>
        <Sidebar></Sidebar>
      </div>
    </>
  )
}

export default Dashboard