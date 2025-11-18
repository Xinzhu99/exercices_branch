import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { posts, users } from "@/lib/schema";

export const GET = async (
  _req: Request,
  { params }: { params: { id: string } }
) => {
  //explication {params: { id: string }}: params est un objet qui contient une clé "id" dont la veleur est un string
  try {
    const { id } = await params;
    const userExists = await db
      .select()
      .from(users)
      .where(eq(users.id, Number(id)));
    if (userExists.length === 0) {
      return Response.json({ error: "utilisateur non trouvé" });
    } else {
      const userData = await db
        .select()
        .from(posts)
        .where(eq(posts.user_id, Number(id)));
      return Response.json(userData);
    }
  } catch (error) {
    console.error("Ereeur GET", error);
    return Response.json({ error: "erreur serveur" });
  }
};
//route pour delete un user
export const DELETE = async (
  _req: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = await params;
  try {
    //supprimer les posts liés -> très important de supprimer d'abord les datas dépendentes 
    await db.delete(posts).where(eq(posts.user_id, Number(id)));
    //sipprmier l'user
    await db.delete(users).where(eq(users.id, Number(id)));
    return Response.json({ message: "remove réussi" }, { status: 200 });
  } catch (error) {
    console.error("delete error", error);
    return Response.json({ message: "failed to delete user" }, { status: 500 });
  }
};
//route pour modifier l'user 
export const PUT = async (request, { params }: { params: { id: string } }) => {
  const { id } = await params;

  const body = await request.json(); //récupérer le json envoyé par front

  console.log("data reçu", body)

  // try {
  //   const userExists = await db
  //     .select()
  //     .from(users)
  //     .where(eq(users.id, Number(id)));
  //   if (userExists.length === 0) {
  //     return Response.json({ error: "user not found" }, { status: 404 });
  //   }
  //   const data = await db
  //     .update(users)
  //     .set({ username: "Diana" })
  //     .where(eq(users.id, Number(id)));
  //   return Response.json(data);
  // } catch (error) {
  //   console.error("put error", error);
  // }
};
