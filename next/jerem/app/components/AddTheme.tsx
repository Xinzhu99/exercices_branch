"use client"
import { addTheme } from "../actions/theme"

export const AddTheme = () => {
    return( 
    <form action={addTheme}>    {/*//action !!*/} 
        <input type="text" name="title" className="bg-amber-50 border-2 m-2 p-2 text-black " required/>
        <button type="submit" className="bg-amber-200 p-2 text-black">Ajouter</button>
    </form>
    )
}