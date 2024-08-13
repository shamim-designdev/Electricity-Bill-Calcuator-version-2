function calculateBill() {
    const acUsage = parseFloat(document.getElementById('ac').value) || 0;
    const lightUsage = parseFloat(document.getElementById('light').value) || 0;
    const pumpUsage = parseFloat(document.getElementById('pump').value) || 0;
    const applianceUsage = parseFloat(document.getElementById('appliance').value) || 0;

    const acBill = acUsage * 10; 
    const lightBill = lightUsage * 5; 
    const pumpBill = pumpUsage * 8; 
    const applianceBill = applianceUsage * 7; 

    const totalBill = acBill + lightBill + pumpBill + applianceBill;

    document.getElementById('result').innerHTML = `
        <p><strong>AC Bill:</strong> $${acBill.toFixed(2)}</p>
        <p><strong>Light Bill:</strong> $${lightBill.toFixed(2)}</p>
        <p><strong>Water Pump Bill:</strong> $${pumpBill.toFixed(2)}</p>
        <p><strong>Appliance Bill:</strong> $${applianceBill.toFixed(2)}</p>
        <p><strong>Total Bill:</strong> $${totalBill.toFixed(2)}</p>
    `;
}
