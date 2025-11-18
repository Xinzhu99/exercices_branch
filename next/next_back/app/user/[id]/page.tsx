"use client";
import { use, useEffect, useState } from "react";
import { useParams } from "next/navigation";
interface Post {
  id: number;
  user_id: number;
  content: string;
}

export default function UserPosts() {
  const params = useParams()
  console.log(params)
  const [postsData, setPostsData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/users/${params.id}`);
      const data = await res.json();
      console.log(data);

      setPostsData(data);
      setLoading(false);
    } catch (error) {
      console.error("error api", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); //relance l'appel api chaque fois que le id change

  if (loading) {
    return <div>chargement...</div>;
  }
  if (postsData.length === 0) {
    return <div>Cet utilisateur n'a pas de post</div>;
  } else {
    return (
      <div>
        <h1>Hello, voici tous les posts de l'utilisateur :</h1>;
        {postsData.map((post) => (
          <div
            key={post.id}
            className="postContainer"
            className="flex gap-4 justify-between items-center"
          >
            <h1>POST ID: {post.id}</h1>
            <h1>Post content : {post.content}</h1>
            <button className="bg-amber-200 rounded-2xl p-2 cursor-alias">
              Modifier
            </button>
            <button className="bg-amber-200 rounded-2xl p-2">Supprimer</button>
          </div>
        ))}
        <button className="bg-blue-500 rounded-2xl p-2">Ajouter un post</button>
      </div>
    );
  }
}
