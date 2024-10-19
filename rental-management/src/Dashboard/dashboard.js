import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Link to="Dashboard" className='badge text-bg-primary text-wrap'> Hello atan </Link>
    </div>
  );
}

export default Dashboard;