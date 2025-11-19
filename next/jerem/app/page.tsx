import { db } from "@/lib/db/drizzle";
import { themesTable } from "@/lib/db/schema";
import { AddTheme } from "./components/AddTheme";
import { DeleteTheme } from "./components/DeleteTheme";

export default async function Home() {
  const themes = await db.select().from(themesTable);

  return (
    <>
      <div>
        <h1 className="text-2xl">Mes thèmes</h1>
        {themes.map((theme) => {
          return (
            <div key={theme.id}>
              <h1>{theme.description}</h1>
              <DeleteTheme id={theme.id}/>
            </div>
          );
        })}
      </div>
      <AddTheme />
    </>
  );
}
