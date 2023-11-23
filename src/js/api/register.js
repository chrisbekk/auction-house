const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function register(user) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, options);

    if (!response.ok) {
      // If the response status is not OK (e.g., 404, 500, etc.)
      const errorData = await response.json(); // Assuming the error response is in JSON format
      console.log(errorData);

      // Handle different HTTP error codes
      if (response.status === 400) {
        throw new Error(errorData.errors[0].message);
      } else if (response.status === 401) {
        throw new Error(`Unauthorized: ${errorData.message}`);
      } else {
        throw new Error(`Error: ${errorData.message}`);
      }
    }

    // If the response is OK, parse and return the data
    return await response.json();
  } catch (error) {
    // Handle network errors or other exceptions
    throw error;
  }
}
