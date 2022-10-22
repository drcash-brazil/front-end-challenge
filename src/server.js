import { createServer, Model, Response } from "miragejs";

export function makeServer({ environment = "test" }) {
  return createServer({
    environment,

    models: {
      funcionarios: Model,
      clinicas: Model,
      redes: Model,
    },

    seeds(server) {
      server.db.loadData({
        clinicas: {
          id: 1,
          nome: "Clinica Teste",
          email: "clinica@teste.com.br",
          fone: 9999999999,
          cnpj: 99999999999999,
          address: "Rua da clinica teste, 007",
          funcionarios: [
            {
              id: 1,
              nome: "Funcionario Teste"
            }
          ],
        },
        funcionarios: {
          id: 1,
          nome: "Funcionario Teste",
          email: "funcionario@teste.com.br",
          fone: 9999999999,
          cpf: 99999999999,
          address: "Rua do funcionario teste, 003",
        },
        redes: {
          id: 1,
          nome: "Redes de clinicas Teste",
          email: "redes@teste.com.br",
          fone: 9999999999,
          address: "Rua do funcionario teste, 003",
          clinicas: [
            {
              id: 1,
              nome: "Clinica Teste"
            }
          ]
        },
      });
    },

    routes() {
      this.namespace = "api";

      // Clinicas
      this.get("clinicas", () => {
        return this.schema.all("clinicas");
      });

      this.get("clinicas/:id", (_, request) => {
        const clinicaId = request.params.id;

        return this.schema.clinicas.find(clinicaId);
      });

      this.post("clinicas", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create("clinicas", data);
      });

      this.patch("clinicas/:id", (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let clinicas = schema.clinicas.find(id);
        if (newAttrs.funcionarios) {
          return new Response(
            400,
            { some: "header" },
            { errors: "Ação não permitida" }
          );
        }
        return clinicas.update(newAttrs);
      });

      this.patch("associar-funcionario", (schema, request) => {
        const { clinicaId, funcionarioId } = JSON.parse(request.requestBody);
        let clinica = schema.findBy("clinicas", { id: clinicaId });
        let funcionario = schema.findBy("funcionarios", { id: funcionarioId });
        let newObj = {
          id: Number(funcionario.id),
          nome: funcionario.nome,
        };

        if (!funcionario || !clinica) {
          return new Response(
            400,
            { some: "header" },
            { errors: "Funcionario ou clinica incorretos" }
          );
        }

        if (!clinica.attrs.funcionarios) {
          clinica.attrs.funcionarios = [];
          clinica.attrs.funcionarios.push(newObj);
          clinica.save();
        } else {
          clinica.attrs.funcionarios.push(newObj);
        }
      });

      this.del("clinicas/:id", (schema, request) => {
        let id = request.params.id;

        schema.clinicas.find(id).destroy();
      });

      // Redes
      // // Get all
      this.get("redes", () => {
        return this.schema.all("redes");
      });

      // // Get by id
      this.get("redes/:id", (schema, request) => {
        const redeId = request.params.id;
        return schema.redes.find(redeId);
      });

      this.post("redes", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create("redes", data);
      });

      this.patch("redes/:id", (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let redes = schema.redes.find(id);
        if (newAttrs.clinicas) {
          return new Response(
            400,
            { some: "header" },
            { errors: "Ação não permitida" }
          );
        }
        return redes.update(newAttrs);
      });

      this.patch("associar-clinica", (schema, request) => {
        const { clinicaId, redeId } = JSON.parse(request.requestBody);
        const rede = schema.redes.find(redeId);
        const clinica = schema.clinicas.find(clinicaId);
        let newObj = {
          id: Number(clinica.id),
          nome: clinica.nome,
        };

        if (!clinica || !rede) {
          return new Response(
            400,
            { some: "header" },
            { errors: "A Rede ou Clinica informados não estão cadastrados" }
          );
        }

        if (!rede.attrs.clinicas) {
          rede.attrs.clinicas = [];
          rede.attrs.clinicas.push(newObj);
          rede.save();
        } else {
          rede.attrs.clinicas.push(newObj);
        }
      });

      this.del("redes/:id", (schema, request) => {
        let id = request.params.id;

        schema.redes.find(id).destroy();
      });

      // Funcionários
      // // Get All
      this.get("funcionarios", () => {
        return this.schema.all("funcionarios");
      });

      // // Get by Id
      this.get("funcionarios/:id", (schema, request) => {
        const funcionarioId = request.params.id;

        return schema.funcionarios.find(funcionarioId);
      });

      this.post("funcionarios", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create("funcionarios", data);
      });

      this.del("funcionarios/:id", (schema, request) => {
        let funcionarioId = request.params.id;
        let funcionario = schema.findBy("funcionarios", { id: funcionarioId });

        if (funcionario !== null) {
          funcionario.destroy();
        }
        return schema.all("funcionarios");
      });
    },
  });
}
