import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";

export default function Home() {
  return (
    <div>
      <UserList />
      <AddUserForm />
    </div>
  );
}
