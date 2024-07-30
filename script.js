const data = 
[
    ["Description", "Measuring Range", "Alarm Settings A1/A2", "Order Code", "Product Category", "Packing unit", "Price/ea Excl. VAT"],
    ["Pac® 6000 with pre-set settings", "", "", "", "", "", ""],
    ["Dräger Pac 6000 H2S LC", "0 - 200 ppm", "5 / 10 ppm", "8326320", "338", "1", "1,017.44 QAR"],
    ["Dräger Pac 6000 CO LC", "0 - 2000 ppm", "30 / 60 ppm", "8326321", "338", "1", "1,017.44 QAR"],
    ["Dräger Pac 6000 O2", "", "19.5; 22.5/19; 23", "", "", "", ""],
    ["Dräger Pac 6500 O2", "", "19.5; 22.5/19; 23", "", "", "", ""],
    ["Dräger Pac 8000 SO2", "", "19.5; 22.5/19; 23", "", "", "", ""],
    ["Dräger Pac 8000 H2S", "", "19.5; 22.5/19; 23", "", "", "", ""]
    
];

function displayTable(data, columns) {
    const tableHeader = document.getElementById('tableHeader');
    const tableBody = document.getElementById('tableBody');

    tableHeader.innerHTML = '';
    tableBody.innerHTML = '';

    if (data.length > 0) {
        columns.forEach(index => {
            const th = document.createElement('th');
            th.textContent = data[0][index];
            tableHeader.appendChild(th);
        });

        data.slice(1).forEach(row => {
            const tr = document.createElement('tr');
            columns.forEach(index => {
                const td = document.createElement('td');
                td.textContent = row[index];
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        });
    } else {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.textContent = 'No results found';
        td.colSpan = columns.length;
        td.style.textAlign = 'center';
        tr.appendChild(td);
        tableBody.appendChild(tr);
    }
}

function filterData() {
    const searchBox = document.getElementById('searchBox').value.toLowerCase();

    const columns = data[0].map((_, index) => index);

    const filteredData = data.filter((row, index) => {
        if (index === 0) return true;

        return row.some(cell => cell && cell.toString().toLowerCase().includes(searchBox));
    });

    displayTable(filteredData, columns);
}

// Initial display of an empty table
function clearTable() {
    const tableHeader = document.getElementById('tableHeader');
    const tableBody = document.getElementById('tableBody');
    
    tableHeader.innerHTML = '';
    tableBody.innerHTML = '';
}

clearTable();
