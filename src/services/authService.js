export const getAddress = () => {
  const address = localStorage.getItem('address');
  if (!address) {
    return null;
  }
  return address;
};

export const handleSignIn = (address) => {
  const userAddress = localStorage.getItem('address');
  if (!userAddress) {
    localStorage.setItem('address', address);
    return address;
  }
  
  return userAddress;
};

export const handleSignOut = () => {
  localStorage.removeItem('address');
};
