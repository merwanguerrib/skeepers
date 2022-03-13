import React, { useState, useEffect, Fragment, useCallback } from "react";
import { userType } from "../commonTypes/userType";
import UserCard from "./UserCard";
import { ErrorMessage } from "./ErrorMessage";
const ENDPOINT_RANDOM_USERS = "https://randomuser.me/api/?results=20";

function Home(): JSX.Element {
  const [users, setUsers] = useState<userType[]>([]);
  const [hasError, setHasError] = useState(false);

  const fetchUsers = useCallback(async () => {
    if (users.length === 0) {
      try {
        const response = await fetch(ENDPOINT_RANDOM_USERS);
        const usersArr = await response.json();
        const results = usersArr.results.map((result: userType) => {
          let user = {
            name: result.name,
            location: result.location,
            email: result.email,
          } as userType;
          return user;
        });
        setUsers(results);
      } catch (error) {
        console.error(error);
        setHasError(true);
      }
    }
  }, [users]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers, users]);

  return (
    <Fragment>
      {hasError ? (
        <ErrorMessage />
      ) : (
        users.map((user: userType, key: number) => {
          return <UserCard {...user} key={key} />;
        })
      )}
    </Fragment>
  );
}

export default Home;
