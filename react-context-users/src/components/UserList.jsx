import { useContext, useEffect } from "react"
import { UserContext } from "../context/user/userState"


const UserList = () => {

  const { getUsers, users, getUser, deleteUser } = useContext(UserContext)


  useEffect(() => {
    getUsers()
    console.log(users);
  }, [])


  return (
    <>
      <h1>Users</h1>
      <div className="list-group h-100">
        <ul>
          {users.map(user => (
            <li
              className="list-group-item list-group-item-action d-flex flex-row justify-content-between align-items-center"
              onClick={() => getUser(user.id)}
              key={user.id}>
              <img src={user.avatar} alt={user.first_name} style={{ width: 50, height: 50, borderRadius: 50 }} />
              {
                user.name ? <p>{user.name}</p> : <p>{user.first_name} {user.last_name}</p>
              }

              <button
                className="btn btn-danger"
                onClick={(e) => {
                  e.stopPropagation()
                  deleteUser(user.id)
                }}
              >Delete</button>


            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default UserList