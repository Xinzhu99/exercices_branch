import Link from "next/link";
import { projects } from "@/lib/db";

export default function Home() {


  return (
    <div className="flex flex-col">
      Mes projects
      {projects.map((project)=>
      <Link key={project.slug} href={`/project/${project.slug}`}>{project.title}</Link> 
      )}
    </div>
  );
}
 