function updateViewAddCalculationPage() {
    document.getElementById('app').innerHTML = /*html*/ `
    
        <button onclick="changePage('calculations')">se kalkulasjoner</button>

       Dette er siden for å legge til nye kalkulasjoner.

       <input type="number"/>
       <select>
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
       </select>
    
    `;
}