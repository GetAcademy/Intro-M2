function setNumber(number) {
    const inputs = model.inputs;
    const pageInputs = inputs.addCalculation;
    pageInputs.number = this.valueAsNumber;
}