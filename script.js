let count = 0;
function insert_Row() {
    count++;

    // FIX: ensure we prepend inside <tbody>, not <table>
    const table1 = document.querySelector("#sampleTable tbody");

    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = `New Cell${count}`;
    count++;

    const td2 = document.createElement("td");
    td2.innerText = `New Cell${count}`;

    tr.append(td1, td2);

    table1.prepend(tr);
}
