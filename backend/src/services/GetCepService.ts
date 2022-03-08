import { consultarCep } from "correios-brasil";


type CepRequest = {
  cep: string;
};

export class GetCepService {
  async execute({ cep }: CepRequest) {
    var result;
    await consultarCep(cep)
      .then((adress) => {
        result = adress;
      })
      .catch(function (e) {
        return new Error("Error na busca pelo cep");
      });
    return result;
  }
}
