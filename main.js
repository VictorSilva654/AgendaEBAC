const form = document.getElementById("form-agenda");
let rows = "";

form.addEventListener('submit', function(e){
    e.preventDefault();

    addLine();
    tableUpdate();
})

function addLine(){
    const nomeContato = document.getElementById("nomeContato");
    const telContato = document.getElementById("telContato");

    let row = '<tr>';
    row += `<td>${nomeContato.value}</td>`;
    row += `<td>${telContato.value}</td>`;
    row += '</tr>';

    rows += row;

    nomeContato.value = '';
    telContato.value = '';

}

function tableUpdate() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = rows;
}