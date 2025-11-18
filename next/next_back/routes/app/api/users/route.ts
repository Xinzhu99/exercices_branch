import { users } from "@/lib/shema";
import { db } from "@/lib/bd";
import { eq } from "drizzle-orm";



export const GET = async () => {
    const data = await db.select().from(users);
    return Response.json(data)
}

export async function POST () {

    const postData = await db.insert(users).values({username: "Xinzhu", email:"xinzhu@gmail.com"})
    return Response.json(postData)
}

export const DELETE = async (
  req, { params }
) => {
  const { id } = await params;
  const data = await db.delete(users).where(eq(users.id, Number(id)));
  return Response.json(data);
};