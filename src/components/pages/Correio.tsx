import Teste from "./correio/Teste";

export default function Calendario() {
  return (
    <>
<div class="border-b border-gray-200 dark:border-gray-700 mt-2">
  <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
    <button type="button" class="ml-2 hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 dark:hs-tab-active:text-white -mb-px py-3 px-4 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-t-lg hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 active" id="card-type-tab-item-1" data-hs-tab="#card-type-tab-1" aria-controls="card-type-tab-1" role="tab">
      Caixa de entrada
    </button>
    <button type="button" class="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 dark:hs-tab-active:text-white -mb-px py-3 px-4 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-t-lg hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300" id="card-type-tab-item-2" data-hs-tab="#card-type-tab-2" aria-controls="card-type-tab-2" role="tab">
      Enviado
    </button>
    <button type="button" class="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 dark:hs-tab-active:text-white -mb-px py-3 px-4 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-t-lg hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300" id="card-type-tab-item-3" data-hs-tab="#card-type-tab-3" aria-controls="card-type-tab-3" role="tab">
      Rascunhos
    </button>
    <button type="button" class="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 dark:hs-tab-active:text-white -mb-px py-3 px-4 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-t-lg hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300" id="card-type-tab-item-4" data-hs-tab="#card-type-tab-4" aria-controls="card-type-tab-4" role="tab">
      Lixo
    </button>
  </nav>
</div>

<div class="mt-3 p-3">
  <div id="card-type-tab-1" role="tabpanel" aria-labelledby="card-type-tab-item-1">
    <Teste/>
  </div>
  <div id="card-type-tab-2" class="hidden" role="tabpanel" aria-labelledby="card-type-tab-item-2">
    <p class="text-gray-500 dark:text-gray-400">
      This is the <em class="font-semibold text-gray-800 dark:text-gray-200">second</em> item's tab body.
    </p>
  </div>
  <div id="card-type-tab-3" class="hidden" role="tabpanel" aria-labelledby="card-type-tab-item-3">
    <p class="text-gray-500 dark:text-gray-400">
      This is the <em class="font-semibold text-gray-800 dark:text-gray-200">third</em> item's tab body.
    </p>
  </div>
</div>    </>
  );
}
