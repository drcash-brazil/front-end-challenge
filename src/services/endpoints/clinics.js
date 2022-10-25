export function getClinics() {
  async function apiCall() {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/clinicas`).then(
      (response) => {
        return response.json();
      }
    );
  }

  return { apiCall };
}
