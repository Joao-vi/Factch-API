const cepInput = document.querySelector("#cep");

cepInput.addEventListener("blur", () => {
  getCEP(cepInput.value);
});

function autoComplete(infoObject) {
  let tag;
  for (let prop in infoObject) {
    tag = document.querySelector("#" + prop);
    if (tag) {
      tag.value = infoObject[prop];
    }
  }
}

function getCEP(cep) {
  const requestCEP = fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then((response) => {
      return response.json();
    })
    .then((jsonBody) => {
      autoComplete(jsonBody);
    })
    .catch((message) => {
      console.log("Erro na url");
    });
}
