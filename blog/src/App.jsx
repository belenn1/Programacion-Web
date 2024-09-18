import { useEffect, useState } from "react";
import supabase from "./assets/lib/helper/supabaseClient";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log(error);
      } else {
        setUser(data?.session?.user);
      }
    };
    getSession();
  }, []);

  const handClick = async () => {
    const { data, error } = supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };
  return (
    <>
      <header>
        este es el header
        <button onClick={handClick}>Conectar con Github</button>
      </header>
    </>
  );
}
