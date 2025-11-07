import { projects } from "@/lib/db";
export default async function Project({ params }) {
  //params est une props particulère qui permet de de créer des pages à partir des slug d'un url
  const { slug } = await params;
  const project = projects.find((item) => item.slug == slug);
  if (project === undefined) {
    return <div>Project undefined</div>;
  } else {
    return (
        <div> 
            <p>{project.title}</p>
            <a href={`${project.gitHubUrl}`}>Lien GitHub</a>
        </div>)

  }
}
