function updateViewAddCalculationPage() {
    let selectedPlus = '';
    let selectedMinus = '';
    let selectedMultiply = '';
    let selectedDivide = '';
    if (model.inputs.addCalculation.operation == '+') selectedPlus = 'selected';
    else if (model.inputs.addCalculation.operation == '-') selectedMinus = 'selected';
    else if (model.inputs.addCalculation.operation == '*') selectedMultiply = 'selected';
    else if (model.inputs.addCalculation.operation == '/') selectedDivide = 'selected';

    const pageInputs = model.inputs.addCalculation;
    document.getElementById('app').innerHTML = /*html*/ `
    
        <button onclick="changePage('calculations')">Se kalkulasjoner</button>

       <h3>Dette er siden for å legge til nye kalkulasjoner.</h3>

       <select onchange="model.inputs.addCalculation.operation=this.value">
          <option ${selectedPlus}>+</option>
          <option ${selectedMinus}>-</option>
          <option ${selectedMultiply}>*</option>
          <option ${selectedDivide}>/</option>
       </select>
       <input 
            type="number"             
            oninput="model.inputs.addCalculation.number=this.valueAsNumber" 
            value="${pageInputs.number || ''}" 
        />
        <!-- alternativt: oninput="setNumber(this.valueAsNumber)" -->
        <br/><input type="checkbox"/> Uthevet
       <br/><button>Legg til</button>
    
    `;
}