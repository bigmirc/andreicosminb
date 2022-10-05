import { useRouter } from 'next/router';
import React from 'react';

const WorkDetail = (project) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <p>id: {id}</p>
    </>
  );
};

export default WorkDetail;
