export function getNetworks() {
  async function apiCall() {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/redes`).then(
      (response) => {
        return response.json();
      }
    );
  }

  return { apiCall };
}
