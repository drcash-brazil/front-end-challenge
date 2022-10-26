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

export function createClinic() {
  async function apiCall({ nome, email, fone, address, cnpj, funcionarios }) {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/clinicas`, {
      method: "POST",
      body: JSON.stringify({
        nome,
        email,
        fone,
        address,
        cnpj,
        funcionarios,
      }),
    }).then((response) => {
      return response.json();
    });
  }

  return { apiCall };
}

export function getClinicById() {
  async function apiCall({ id }) {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/clinicas/${id}`).then(
      (response) => {
        return response.json();
      }
    );
  }

  return { apiCall };
}

export function editClinic() {
  async function apiCall({ id, nome, email, fone, cnpj, address }) {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/clinicas/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        nome,
        email,
        fone,
        cnpj,
        address,
      }),
    }).then((response) => {
      return response.json();
    });
  }

  return { apiCall };
}

export function deleteClinic() {
  async function apiCall({ id }) {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/clinicas/${id}`, {
      method: "DELETE",
    });
  }

  return { apiCall };
}

export function associateEmployees() {
  async function apiCall({ clinicaId, funcionarioId }) {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/associar-funcionario`, {
      method: "PATCH",
      body: JSON.stringify({
        clinicaId,
        funcionarioId,
      }),
    }).then((response) => {
      return response.json();
    });
  }

  return { apiCall };
}
