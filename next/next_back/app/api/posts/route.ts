import { db } from "@/lib/db";
import { posts } from "@/lib/schema";



export const GET = async () => {
    const postData = await db.select().from(posts);
    return Response.json(postData);
};

