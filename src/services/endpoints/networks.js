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

export function getNetworkById() {
  async function apiCall({ id }) {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/redes/${id}`).then(
      (response) => {
        return response.json();
      }
    );
  }

  return { apiCall };
}

export function editNetwork() {
  async function apiCall({ id, nome, email, fone, address }) {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/redes/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        nome,
        email,
        fone,
        address,
      }),
    }).then((response) => {
      return response.json();
    });
  }

  return { apiCall };
}

export function deleteNetwork() {
  async function apiCall({ id }) {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/redes/${id}`, {
      method: "DELETE",
    });
  }

  return { apiCall };
}

export function associateClinics() {
  async function apiCall({ clinicaId, redeId }) {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/associar-clinica`, {
      method: "PATCH",
      body: JSON.stringify({
        clinicaId,
        redeId,
      }),
    }).then((response) => {
      return response.json();
    });
  }

  return { apiCall };
}
