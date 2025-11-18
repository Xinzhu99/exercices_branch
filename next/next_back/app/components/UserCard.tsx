import Link from "next/link";
import UserDeleteBtn from "./UserDeleteBtn";
import { useState } from "react";
import { isReactCompilerRequired } from "next/dist/build/swc/generated-native";

export default function UserCard({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.username);
  const [email, setEmail] = useState(user.email)

  const addUser = async() => {
    try {
        const res = await fetch(`http://localhost:3000/api/users${user.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify({
                username:name,
                email:email
            })
        })
        const putData = await res.json()
        console.log(putData)
        alert("La modification a été enregistrée !")
        setIsEditing(false)
        window.location.reload()

    } catch (error) {
        console.log("erreur de l'API", error)
    }
  }

  return (
    <div>
      {isEditing ? (
        <>
          <input
            required
            className="bg-amber-200 border-1"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)
            }
          ></input>
          <p>{name}</p>
          <input
            required
            className="bg-amber-200 border-1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)
            }
          ></input>
          <p></p>
          <button 
            className="bg-emerald-300 rounded-2xl p-2 cursor-pointer"
            onClick={addUser}
            >
            Enregistrer
          </button>
           <button 
            className="bg-amber-200 rounded-2xl p-2 cursor-pointer"
            onClick={()=>setIsEditing(!isEditing)}
            >
            Annuler
          </button>
        </>
      ) : (
        <>
          <Link className="text-3xl" href={`/user/${user.id}`}>
            {user.username}
          </Link>
          <p>{user.email}</p>
          <button 
            className="bg-amber-200 rounded-2xl p-2 cursor-pointer"
            onClick={()=>setIsEditing(!isEditing)}
          >
            Modifier
          </button>{" "}
          <UserDeleteBtn id={user.id} />
        </>
      )}
    </div>
  );
}
