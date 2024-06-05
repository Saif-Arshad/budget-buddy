"use client"

import { useEffect, useState } from 'react';
import { useUser } from "@clerk/clerk-react";

const useCurrentUser = () => {
  const { user } = useUser();
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUsername] = useState("");

  useEffect(() => {
    if (user) {
      const email = user.primaryEmailAddress?.emailAddress || "No email address found";
      const name = user.fullName || "No name found";
      setUserEmail(email);
      setUsername(name);
    }
  }, [user]);

  return { userEmail, userName };
};

export default useCurrentUser;
