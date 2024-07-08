export const searchServices = async (optional = '') => {
  const url = `https://saga-details-back.onrender.com${optional ? `?${optional}` : ''}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result = await response.json();
  return result;
};

