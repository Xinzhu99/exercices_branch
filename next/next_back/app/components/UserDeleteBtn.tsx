"use client"

export default function UserDeleteBtn ({id}) {
  const handleClick = async() => {
    // 1. Demander confirmation par window.confirm (une alerte de message)
    if (!confirm("Supprimer cet utilisateur ?")) {
      return; // Annuler si l'utilisateur dit "non"
    }

    try {
      // 2. Envoyer la requête DELETE
      const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "DELETE" // ← TRÈS IMPORTANT !
      });

      // 3. Récupérer la réponse
      const result = await res.json();
      console.log(result);

      //! 4. Rafraîchir la page pour voir les changements
       window.location.reload();

    } catch (error) {
      console.log(error, "difficulty with api");
    }
  }

  return (
    <button 
      onClick={handleClick} 
      className="bg-red-500 text-white rounded-2xl p-2 cursor-pointer hover:bg-red-600"
    >
      Supprimer
    </button>
  )
}