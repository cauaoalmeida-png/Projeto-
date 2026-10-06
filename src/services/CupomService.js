export default class CupomService {
  #cupons = new Map();

  criarCupom(cupom) {
    if (!cupom || typeof cupom.codigo !== "string" || !cupom.codigo.trim()) {
      throw new TypeError("O cupom deve ter um codigo valido.");
    }

    if (this.#cupons.has(cupom.codigo)) {
      throw new Error(`Ja existe um cupom com o codigo "${cupom.codigo}".`);
    }

    this.#cupons.set(cupom.codigo, cupom);
    return cupom;
  }

  buscarCupom(codigo) {
    return this.#cupons.get(codigo) ?? null;
  }

  removerCupom(codigo) {
    return this.#cupons.delete(codigo);
  }
}
