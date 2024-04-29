import { promises as fsAsync } from "fs";
const { readFile, writeFile } = fsAsync;

const pathFile = "db/pedidos.json";

class DeliveryRepository {
  async readFileRepository() {
    const data = JSON.parse(await readFile(pathFile, "utf-8"));
    return data;
  }

  async writeFileRepository(data) {
    await writeFile(pathFile, JSON.stringify(data, null, 2));
  }

  async insertDemand(order) {
    const data = await this.readFileRepository();
    const neworder = await { id: data.nextId++, ...order };
    data.pedidos.push(neworder);
    await this.writeFileRepository(data);
    return neworder;
  }

  async getDemands() {
    const data = await this.readFileRepository();
    return data.pedidos;
  }

  async getDemand(id) {
    const data = await this.readFileRepository();
    const pedido = data.pedidos.filter((demand) => demand.id === Number(id));
    return pedido;
  }


  async removeDemand(id) {
    // const arr = [];
    // arr.findIndex()
    try {
      const data = await this.readFileRepository();
      data.pedidos = await data.pedidos.filter(
        (demand) => demand.id !== Number(id)
      );
      await this.writeFileRepository(data);
      return data;
    } catch (err) {
      return err;
    }
  }

  async returnTotalInvoicing() {
    const data = await this.readFileRepository();
    const valor = {total: data.pedidos.map(pedido => pedido.valor).reduce((acc, current) => acc += current)};
    return valor;
  }

  async updateItemList(entry) {
    try {
      const data = await this.readFileRepository();
      const index = await data.pedidos.findIndex(
        (pedido) => pedido.id === Number(entry.id)
      );
      if (index === -1) {
        return new Error("Demand not found");
      } else {
        data.pedidos[index].entregue = entry.entregue;
        await this.writeFileRepository(data);
        return "Update successful.";
      }
    } catch (err) {
      return err;
    }
  }
}

export default new DeliveryRepository();
