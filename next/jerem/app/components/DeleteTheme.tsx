import { deleteTheme } from "../actions/theme"
export const DeleteTheme = ({ id }) => {
    console.log(id)
    return (
        <form action={deleteTheme}>
            <input type="hidden" value={id} name="id" className="bg-amber-600"/>
            <button className="bg-amber-200 p-2" type="submit">Supprimer</button>
        </form>
    )
} 