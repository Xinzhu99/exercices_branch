"use client"
import { addTheme } from "../actions/theme"

export const AddTheme = () => {
    return( 
    <form action={addTheme}>    {/*//action !!*/} 
        <input type="text" name="title" className="bg-amber-50 border-2 m-2 p-2"/>
        <button type="submit" className="bg-amber-200 p-2">Ajouter</button>
    </form>
    )
}