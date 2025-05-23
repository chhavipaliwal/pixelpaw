'use client';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@heroui/react';
const UserDashboard = () => {
  const { data: session } = useSession();
  return (
    <>
      <h1>This is user dashboard</h1>
      {session && <p>Welcome, {session?.user?.name}! You are logged in.</p>}
      {session ? (
        <Button onPress={() => signOut()}>Logout</Button>
      ) : (
        <Button onPress={() => signIn()}>Login</Button>
      )}
    </>
  );
};

export default UserDashboard;
