function updateViewAddCalculationPage() {
    const pageInputs = model.inputs.addCalculation;
    document.getElementById('app').innerHTML = /*html*/ `
    
        <button onclick="changePage('calculations')">Se kalkulasjoner</button>

       <h3>Dette er siden for å legge til nye kalkulasjoner.</h3>

       <select onchange="model.inputs.addCalculation.operation=this.value">
          <option ${getSelected('+')}>+</option>
          <option ${getSelected('-')}>-</option>
          <option ${getSelected('*')}>*</option>
          <option ${getSelected('/')}>/</option>
       </select>
       <input 
            type="number"             
            oninput="model.inputs.addCalculation.number=this.valueAsNumber" 
            value="${pageInputs.number || ''}" 
        />
        <!-- alternativt: oninput="setNumber(this.valueAsNumber)" -->
        <!-- <br/><input type="checkbox"/> Uthevet -->
        ${getCheckboxHtml()}
       <br/><button onclick="addNumberAndOperation()">Legg til</button>
    `;
}

function getSelected(operation) {
    return model.inputs.addCalculation.operation == operation ? 'selected' : '';
}

function getCheckboxHtml() {
    const cssClass = model.inputs.addCalculation.isHighlight ? 'chkTrue' : 'chkFalse';
    return `<div onclick="toggleHighlight()" class="${cssClass}"></div>`;
}