import { users } from "@/lib/shema";
import { db } from "@/lib/bd";
import { eq } from "drizzle-orm";



export async function GET (req, { params }) {
    const { id } = await params;
    const data = await db.select().from(users).where(eq(users.id,parseInt(id))); //vu que id récupére de l'url est en string, faut le transformer en int
    return Response.json(data)
}

