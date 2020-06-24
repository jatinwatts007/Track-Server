import React, { useContext, useEffect } from 'react';
import { Context } from '../context/authContext';

const ResolveAuthSecreen = () => {
  const { tryLocalSignin } = useContext(Context);
  useEffect(() => {
    tryLocalSignin();
  }, []);

  return null;
};

export default ResolveAuthSecreen;
