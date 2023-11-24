//const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_URL = "https://api.noroff.dev/api/v1/auction";
export async function getListings() {
  try {
    const response = await fetch(`${BASE_URL}/listings`);
    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);

      if (response.status === "404") {
        throw new Error("404");
      }
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}
