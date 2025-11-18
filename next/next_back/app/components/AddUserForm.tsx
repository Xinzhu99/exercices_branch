"use client"
import { useState } from "react"
export default function AddUserForm () {
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch("http://localhost:3000/api/users", {
                method: "POST",
                headers:{"Content-Type": "application/json"},
                body:JSON.stringify({
                    username: userName,
                    email: userEmail
                })
            }
        )
            const postData = await res.json()
            console.log(postData)
            alert("Utilisateur ajouté avec succès !")
            window.location.reload()
            setUserEmail("")
            setUserName("")


        } catch (error) {
            console.log(error, 'problem with server')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Nom : </label>
            <input id="userName" name="name" placeholder="Nom de l'utilisateur" value={userName} onChange={(e)=>setUserName(e.target.value)} type="text" required></input>
            <label>Email : </label>
            <input id="userEmail" name="email" placeholder="Mail de l'utilisateur" value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} type="email" required></input>
            <button type="submit" className=" bg-blue-500 text-white rounded-2xl p-2 cursor-pointer hover:bg-red-600">Enregistrer</button>
        </form>
    )
}