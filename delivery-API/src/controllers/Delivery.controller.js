import DeliveryRepositoryClass from "../repositories/DeliveryRepository.class.js";


class DeliveryControllers {

  async createDemand(req, res, next) {
    try {
      // Validação
      const { cliente, produto, valor } = req.body;
      if (!cliente || !produto || valor === null) {
        throw new Error(`cliente, produto, valor são valores obrigatorios.`);
      }
      const demand = {
        cliente,
        produto,
        valor,
        entregue: false,
        timestamp: new Date(),
      };

      // Ação do Serviços
      const insertedDemand = await DeliveryRepositoryClass.insertDemand(demand);

      res.status(200).json(insertedDemand);
      //global.loggers.info('Inserido com sucesso.');
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  } // OK

  async getDemandsList(req, res, next) {
    try {
      res.status(200).send(await DeliveryRepositoryClass.getDemands());
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  } // OK

  async getDemandItem(req, res, next) {
    try {
      const { id } = req.params;
      res.status(200).send(await DeliveryRepositoryClass.getDemand(id));
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  } // OK

  async getInvoicing(req, res, next) {
    try {
      res.status(200).send(await DeliveryRepositoryClass.returnTotalInvoicing());
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  }


  async removeDemandList(req, res, next) {
    try {
      const { id } = req.params;
      if (!id || id == null) {
        throw new Error(`Parametro invalido`);
      }
      const data = await DeliveryRepositoryClass.removeDemand(id);
      console.log(data[data.length - 1]);

      res.end();
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  } // OK

  async updateDemand(order) {

  } // Construir Controller

  async updateStatusDemand(req, res, next) {
    try {
      const { id, entregue } = req.body;
      if (typeof entregue !== "boolean") {
        throw new Error(
          "Valor do status é invalido. Informe um valor booleano (true/false)"
        );
      }
      const entry = { id, entregue };

      const validate = await DeliveryRepositoryClass.updateItemList(entry);

      res.status(200).send({ message: validate });
    } catch (error) {
      res.status(400).send({ error: err.message });
    }
  } // OK
}

export default new DeliveryControllers();
