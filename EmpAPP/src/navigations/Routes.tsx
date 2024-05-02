import React, {useEffect, useState} from 'react';
import AuthNav from './AuthNav';
import HomeNav from './Drawer/HomeNav';

const Routes = () => {
  const [isvalid, setIsvalid] = useState(false);
  useEffect(() => {
    setIsvalid(true);
  }, []);
  return !isvalid ? <AuthNav /> : <HomeNav />;
};

export default Routes;
