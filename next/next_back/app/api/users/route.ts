import { db } from "@/lib/db";
import { posts, users } from "@/lib/schema";

export const GET = async () => {
  const userData = await db.select().from(users);
  return Response.json(userData);
};

//route pour ajouter un nouvel utilisateur :
export const POST = async (request) => {
  const body = await request.json(); //récupérer le json envoyé par front

  console.log("data réçue", body)
  const { username, email } = body; //déstructurer les données

  //toujours vérifier les données sont pas vides
  if (!username || !email) {
    return Response.json({ error: "champs manquants" }, { status: 400 });   //400: bad request 
  } else {
    const newUser = await db.insert(users).values({
      username:username,                            //1er username : nom des clés définies dans le schéma
      email: email,                                 //2è username : les clés d'objets du body récupéré
    }).returning();                                 //retourner toutes les infos de mon post
    return Response.json(
        {message: "new user is added"},
        {status: 201})              //201: code pour "created"
  }
};
