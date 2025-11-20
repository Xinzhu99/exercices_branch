//méthode 2 : je crée un bouton pour communiquer le id au back mais "use client"

// "use client"
// import { deleteTheme } from "../actions/theme"

// export const DeleteTheme = ({ id }: {id: number}) => {
//     console.log(id)
//     return (
//         // <form action={deleteTheme}>
//         //     <input type="hidden" value={id} name="id" className="bg-amber-600"/>
//         //     <button className="bg-amber-200 p-2" type="submit">Supprimer</button>
//         // </form>
//         <button onClick={()=>deleteTheme(id)}>Supprimer</button>
//     )
// } 

//méthode 3 : bind 
import { deleteTheme } from "../actions/theme";
export const DeleteTheme = ({id} : {id: number}) => {
    const deleteThemeWithId = deleteTheme.bind(null,id)  //bind arguments to a server action (conext, premier argument)

    return (
        <form action={deleteThemeWithId}>
            <button className="bg-red-500 text-white p-2 rounded" type="submit">Supprimer</button>
        </form>
    )
}