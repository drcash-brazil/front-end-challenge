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

export function createNetwork() {
  async function apiCall({ nome, email, fone, address, clinicas }) {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/redes`, {
      method: "POST",
      body: JSON.stringify({
        nome,
        email,
        fone,
        address,
        clinicas,
      }),
    }).then((response) => {
      return response.json();
    });
  }

  return { apiCall };
}
