
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold text-lct-blue mb-6">Page Not Found</h1>
          <p className="text-xl text-lct-darkgray mb-8">
            We're sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn btn-primary">
            Return to Home Page
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
