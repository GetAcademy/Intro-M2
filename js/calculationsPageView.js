function updateViewCalculationsPage() {
    document.getElementById('app').innerHTML = /*html*/ `

        <button onclick="changePage('addCalculation')">Legg til kalkulasjon</button>
        <h1>Min kalkulasjonsside</h1>
    
        ${createCalculationsHtml()}
    
    `;
}

function createCalculationsHtml() {
    let calculationsHtml = '';
    for (let calculation of model.calculations) {
        calculationsHtml += `
            <li class="${calculation.isHighlight ? 'highlight' : ''}">
                ${calculation.mathOperation} 
                ${calculation.number} 
            </li>
            `;
    }
    return calculationsHtml;
}