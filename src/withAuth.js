import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();

    // Comprobar si el usuario está autenticado
    const isAuthenticated = false; // Cambiar a verdadero si el usuario está autenticado

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('./pages/login.jsx');
      }
    }, );

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    }

    return null;
  };

  return Wrapper;
};

export default withAuth;
