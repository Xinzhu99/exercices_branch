"use server"
import { db } from "@/lib/db/drizzle"
import { themesTable } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

//function qui permet de faire l'action "ajouter un théme" => comme une route
export const addTheme = async (formData:FormData) => {
    console.log(formData.get("title"))  //title est le name trouvé pour input 
    const title = formData.get("title")

    if(typeof title !== "string"){
        throw Error("AHHHHHHHHHHHHHHHHHHH!")
    }
    await db.insert(themesTable)
    .values({
        description:title,
    })
    revalidatePath("/")
    
}

//function qui permet de supprimer un thème
export const deleteTheme = async (formData:FormData) => {
    // console.log(formData.get("id"))
    const inputId = formData.get("id")
    await db.delete(themesTable)
    .where(eq(themesTable.id,inputId))
    revalidatePath("/")

}