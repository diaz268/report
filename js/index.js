const urlTarjeta = "https://api.steinhq.com/v1/storages/5f488ab35d3cdc44fcd7d3ac/tarjeta";
const urlTabla = "https://api.steinhq.com/v1/storages/5f488ab35d3cdc44fcd7d3ac/tabla";

const apiTarjetas = async () => {
  let response = await fetch(urlTarjeta);
  return await response.json();
};

const apiTablas = async () => {
  let response = await fetch(urlTabla);
  return await response.json();
};

window.onload = async () => {
  let tarjetas = document.querySelector("#tarjetas");
  let tablas = document.querySelector("#tabla");
  let dataTarjetas = await apiTarjetas();
  let dataTablas = await apiTablas();

  console.log(dataTarjetas);

  if (dataTarjetas.length > 0) {
    dataTarjetas.forEach((e) => {
      let dataTarjeta = document.createElement("div");
      dataTarjeta.className = "col";
      dataTarjeta.innerHTML = `
      <div class="card">
        <div class="card-body">
          <div class="row" style="height: 120px;">
            <div class="col d-flex flex-column justify-content-between">
              <h1 class="text-primary"><i class="fas fa-chart-line"></i></h1>
              <span class="card-link">${e.description}<span />
            </div>
            <div class="col text-right d-flex flex-column justify-content-between">
              <h5>${e.name}</h5>
              <span class="display-4 font-weight-bold">${e.total}<span />
            </div>
          </div>
        </div>
      </div>
      `;
      tarjetas.appendChild(dataTarjeta);
    });
  } else {
    tarjetas.innerHTML = "<tr></tr>";
  }

  if (dataTablas.length > 0) {
    dataTablas.forEach((e) => {
      let dataTabla = document.createElement("tr");
      dataTabla.innerHTML = `
        <th scope="row">${e.name}</th>
        <td>${e.revA}</td>
        <td>${e.revB}</td>
        <td>${e.rev0}</td>
      `;
      tablas.appendChild(dataTabla);
    });
  } else {
    tablas.innerHTML = "<tr></tr>";
  }
};
