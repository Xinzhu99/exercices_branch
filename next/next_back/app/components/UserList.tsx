"use client";
import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import UserDeleteBtn from "./UserDeleteBtn";
import UserCard from "./UserCard";

// pour typer le data reçu
interface userDataConfig {
  id: number;
  username: string;
  email: string;
}
export default function UserList() {
  const [userData, setUserData] = useState<userDataConfig[]>([]); //<useDataConfig[]> pour reprendre le typage

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/users");
      const data = await res.json();
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.log("Problem of connecting to API", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (userData.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div>
          {userData.map((user) => (
            
            <UserCard key={user.id} user={user} />

          ))}
        </div>
      </>
    );
  }
}
