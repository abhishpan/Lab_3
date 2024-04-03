document.addEventListener('DOMContentLoaded', () => {
    const billTotalInput = document.getElementById('billTotal');
    const tipSlider = document.getElementById('tipSlider');
    const tipSliderValue = document.getElementById('tipSliderValue');
    const tipPercentageInput = document.getElementById('tipPercentage');
    const tipAmountInput = document.getElementById('tipAmount');
    const totalBillWithTipInput = document.getElementById('totalBillWithTip');

    function calculateTip() {
        const billTotal = parseFloat(billTotalInput.value);
        const tipPercentage = parseInt(tipSlider.value, 10);
        const tipAmount = billTotal * (tipPercentage / 100);
        const totalBillWithTip = billTotal + tipAmount;

        // Update UI
        tipSliderValue.textContent = `${tipPercentage}%`;
        tipPercentageInput.value = `${tipPercentage}%`;
        tipAmountInput.value = tipAmount.toFixed(2);
        totalBillWithTipInput.value = totalBillWithTip.toFixed(2);
    }

    // Event listeners
    billTotalInput.addEventListener('input', calculateTip);
    tipSlider.addEventListener('input', () => {
        tipSliderValue.textContent = `${tipSlider.value}%`;
        calculateTip();
    });
});
