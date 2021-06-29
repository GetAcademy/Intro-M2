function setNumber(number) {
    const inputs = model.inputs;
    const pageInputs = inputs.addCalculation;
    pageInputs.number = this.valueAsNumber;
}

function addNumberAndOperation() {
    const pageInputs = model.inputs.addCalculation;
    model.calculations.push({
        number: pageInputs.number,
        mathOperation: pageInputs.operation,
        isHighlight: pageInputs.isHighlight,
    });
    model.currentPage = 'calculations';
    updateView();
}