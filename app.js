(() => {
  "use strict";

  angular.module('app', []);

  angular.module('app').controller('controlador', controlador);

  controlador.$inject = ['exemploService'];

  function controlador(exemploService) {
    const vm = this;
    vm.cepDigitado = null;
    vm.resultadoCEP = null;
    vm.titulo = 'Exemplo CEP';

    vm.buscarCEP = buscarCEP;
    vm.sucesso = sucesso;
    vm.erro = erro;

    function buscarCEP() {
      if (!vm.cepDigitado) {
        return;
      }

      exemploService.consultarCEP(vm.cepDigitado, vm.sucesso, vm.erro);
    }

    function sucesso(resposta) {
      console.log(resposta);
      vm.resultadoCEP = resposta.data;
    }

    function erro(erro) {
      console.log(erro);
    }

  }
})();