import { useEffect, useState } from "react";

const Home = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('http://localhost:8080/getUser', {
          method: 'GET',
          credentials: 'include',
        });
        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        console.error(err.message);
      }
    }
    

    fetchUser();
  }, [setUser]);

    const handleClick = () => {
        try {
            window.location.href = 'http://localhost:8080/auth/google';
          } catch (error) {
            console.error('Error during redirect:', error);
          }
      }
      
  return (
    <>
      {user != null ? <> 
      <h1>Welcome {user.name}</h1> 
      </> : <button onClick={handleClick}>Login with Google</button> }
      
    </>
  )
}

export default Home







