export function getEmployees() {
  async function apiCall() {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/funcionarios`).then(
      (response) => {
        return response.json();
      }
    );
  }

  return { apiCall };
}

export function createEmployee() {
  async function apiCall({ nome, email, fone, address, cpf }) {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/funcionarios`, {
      method: "POST",
      body: JSON.stringify({
        nome,
        email,
        fone,
        address,
        cpf,
      }),
    }).then((response) => {
      return response.json();
    });
  }

  return { apiCall };
}

export function deleteEmployee() {
  async function apiCall({ id }) {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/funcionarios/${id}`, {
      method: "DELETE",
    });
  }

  return { apiCall };
}
