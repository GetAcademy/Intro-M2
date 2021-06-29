function toggleHighlight() {
    const pageInputs = model.inputs.addCalculation;
    pageInputs.isHighlight = !pageInputs.isHighlight;
    updateView();
}