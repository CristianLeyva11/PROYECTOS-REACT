
import UserList from './components/UserList'
import Profile from './components/Profile'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import UserStateProvider from './context/user/userState'
import Form from './components/Form'
import { Toaster } from 'sonner'

function App() {

  return (
    <>
      <UserStateProvider>

        <div className='container p-4'>
          <div className="row">
            <div className="col-md-12">
              <Form />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <UserList />
            </div>
            <div className="col-md-6">
              <Profile />
            </div>
          </div>

        </div>
        <Toaster />
      </UserStateProvider>
    </>
  )
}

export default App
