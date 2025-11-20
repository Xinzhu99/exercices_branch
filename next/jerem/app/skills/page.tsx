import { skillsTable, themesTable } from "@/lib/db/schema";
import { db } from "@/lib/db/drizzle";
import { eq } from "drizzle-orm";
import SkillStatus from "../components/SkillStatus";
//from(skillsTable).leftJoin : garde tous les éléments de "skills" et ajoute les info de la table thème
export default async function Skills() {
  const skills = await db
    .select({
      id: skillsTable.id,
      name: skillsTable.name,
      description: themesTable.description,
      status: skillsTable.status,
    })
    .from(skillsTable)
    .leftJoin(themesTable, eq(themesTable.id, skillsTable.themeId));
  console.log("skills", skills);

  return (
    <div className=" flex flex-col p-4 gap-4">
      <h1 className="text-3xl text-pink-400">Mes skills</h1>
      {skills.map((skill) => (
        <div key={skill.id} className="skill border-2 border-pink-400">
          <h2>Name : {skill.name}</h2>
          <h2>Status : {skill.status}</h2>
          <h1>Thème : {skill.description}</h1>
        </div>
      ))}
      <form className="flex gap-2">
        <label name="skillName">Name :</label>
        <input
          className="bg-amber-200 p-2 rounded-xl text-black"
          name="skillName"
        />
        <label name="status">Status :</label>

        <select
          className="bg-amber-200 p-2 rounded-xl text-black"
          name="status">
            {/* <option value="">Please choose an option</option> */}
            < SkillStatus />
          </select>
        <label name="thème">Thème :</label>

        <input
          className="bg-amber-200 p-2 rounded-xl text-black"
          name="thème"
        />
        <button className="bg-pink-400 rounded-xl p-2 text-xl" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
}
