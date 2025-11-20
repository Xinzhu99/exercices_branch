"use server"
import { db } from "@/lib/db/drizzle"
import { themesTable } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

//function qui permet de faire l'action "ajouter un théme" => comme une route
export const addTheme = async (formData:FormData) => {                        //FormData permet de récupérer de la date du form 
    console.log(formData.get("title"))  //title est le name trouvé pour input 
    const title = formData.get("title")
    //vérifier le input est un string non vide ou "   " (seulement des espaces )
    if(typeof title !== "string"|| !title.trim()){           
        throw Error("AHHHHHHHHHHHHHHHHHHH!")
    }
    await db.insert(themesTable)
    .values({
        description:title,
    })
    revalidatePath("/")                 //méthode pour rafraîchir la page 
    
}

//function qui permet de supprimer un thème
// METHODE 1 : FormData et créer un input caché 
// export const deleteTheme = async (formData:FormData) => {
//     // console.log(formData.get("id"))
//     const inputId = Number(formData.get("id"))
//     await db.delete(themesTable)
//     .where(eq(themesTable.id,inputId))
//     revalidatePath("/")

// }

//méthode 2: 
export const deleteTheme = async (id:number)=> {
 await db.delete(themesTable).where(eq(themesTable.id,id))
 revalidatePath("/")
}