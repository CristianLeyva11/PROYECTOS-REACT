import { useContext } from "react"
import { UserContext } from "../context/user/userState"


const Profile = () => {
  const { selectedUser } = useContext(UserContext)

  return (
    <>
      <h1>Profile</h1>
      {
        selectedUser ? (
          <div className="card text-center">
            <div className="card-body">
              <img src={selectedUser.avatar} alt={selectedUser.first_name} className="img-fluid rounded-circle" width="100" />
              <h3>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h3>
              <p>{selectedUser.email}</p>
            </div>
          </div>
        ) : (
          <div></div>
        )
      }
    </>
  )
}

export default Profile