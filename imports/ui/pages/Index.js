import React from 'react';

import UserForm from '../users/UserForm';

const Index = ({ loading, client, user }) => {
  if (loading) return null;
  return (
    <>
      <h1>Index</h1>
    </>
  );
};

export default Index;
