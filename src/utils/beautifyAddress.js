export const beautifyAddress = (address, till = 6, from = 4) => {
  return `${address?.slice(0, till)}...${address?.slice(
    address.length - from,
    address.length
  )}`;
};
