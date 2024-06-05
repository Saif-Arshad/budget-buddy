import { useEffect, useState } from 'react';
import { useUser } from "@clerk/clerk-react";

const useStoreUserEmail = () => {
  const { user } = useUser();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (user) {
      const email = user.primaryEmailAddress?.emailAddress || "No email address found";
      setUserEmail(email);
      const gettingLocalStorage = localStorage.getItem("budgetbuddy-user");

      if (!gettingLocalStorage && email) {
        localStorage.setItem("budgetbuddy-user", email);
        (async () => {
          const res = await fetch(`/api/user`, {
            method: 'POST',
            cache: 'no-store',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               email,
            }),
          });
          console.log(res);
        })();
      }
    }
  }, [user]);

  return userEmail;
};

export default useStoreUserEmail;
