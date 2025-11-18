import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { posts, users } from "@/lib/schema";

export const GET = async (_req:Request,{ params }: { params: { id: string } }) => { //explication {params: { id: string }}: params est un objet qui contient une clé "id" dont la veleur est un string 
  try {
    const { id } = await params;
    const postExists = await db
      .select()
      .from(posts)
      .where(eq(posts.id, Number(id)));
    if (postExists.length === 0) {
      return Response.json({ error: "post non trouvé" });
    } else {
      const postData = await db
        .select()
        .from(posts)
        .where(eq(posts.id, Number(id)));
        return Response.json(postData);
      
    }
  } catch (error) {}
};

export const DELETE = async (
  _req:Request,
  { params }: { params: { id: string } }
) => {
  const { id } = await params;
  try {
    //supprimer les posts liés
    await db.delete(posts).where(eq(posts.id, Number(id)));
    //sipprmier l'user
    return Response.json("remove réussi");
  } catch (error) {
    console.error("delete error", error);
    return Response.json("failed to delete user");
  }
};