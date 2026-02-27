// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  const capacitanceInput = document.getElementById('capacitance');
  const capUnitSelect = document.getElementById('cap-unit');
  const voltageInput = document.getElementById('voltage');
  const resistanceInput = document.getElementById('resistance');
  const resUnitSelect = document.getElementById('res-unit');
  
  const chargeSpan = document.getElementById('charge');
  const chargeUnitSpan = document.getElementById('charge-unit');
  const energySpan = document.getElementById('energy');
  const energyUnitSpan = document.getElementById('energy-unit');
  const tauSpan = document.getElementById('time-constant');
  const tauUnitSpan = document.getElementById('tau-unit');

  // Conversion factors to base units (farads, ohms)
  const capFactors = {
    'F': 1,
    'mF': 1e-3,
    'µF': 1e-6,
    'nF': 1e-9,
    'pF': 1e-12
  };

  const resFactors = {
    'Ω': 1,
    'kΩ': 1e3,
    'MΩ': 1e6
  };

  // Function to format number with appropriate unit prefix
  function formatWithUnit(value, baseUnit) {
    if (value === 0) return { value: '0', unit: baseUnit };
    
    const absValue = Math.abs(value);
    const units = [
      { factor: 1e12, prefix: 'T' },
      { factor: 1e9,  prefix: 'G' },
      { factor: 1e6,  prefix: 'M' },
      { factor: 1e3,  prefix: 'k' },
      { factor: 1,    prefix: '' },
      { factor: 1e-3, prefix: 'm' },
      { factor: 1e-6, prefix: 'µ' },
      { factor: 1e-9, prefix: 'n' },
      { factor: 1e-12,prefix: 'p' }
    ];
    
    for (let i = 0; i < units.length; i++) {
      if (absValue >= units[i].factor) {
        const converted = value / units[i].factor;
        // Keep 3 significant digits but avoid trailing zeros after decimal
        const formatted = converted.toPrecision(3).replace(/\.?0+$/, '');
        return { value: formatted, unit: units[i].prefix + baseUnit };
      }
    }
    // fallback for very small numbers
    return { value: value.toExponential(2), unit: baseUnit };
  }

  function updateResults() {
    // Parse inputs
    let C = parseFloat(capacitanceInput.value);
    let V = parseFloat(voltageInput.value);
    let R = parseFloat(resistanceInput.value);

    // Validate
    if (isNaN(C) || C <= 0) C = 0;
    if (isNaN(V) || V < 0) V = 0;
    if (isNaN(R) || R <= 0) R = 0;

    // Convert to base units
    const capUnit = capUnitSelect.value;
    const resUnit = resUnitSelect.value;
    const C_farads = C * capFactors[capUnit];
    const R_ohms = R * resFactors[resUnit];

    // Calculate
    const Q_coulombs = C_farads * V;                 // Q = C * V
    const E_joules = 0.5 * C_farads * V * V;         // E = 1/2 * C * V^2
    const tau_seconds = R_ohms * C_farads;           // τ = R * C

    // Format and display charge
    if (Q_coulombs === 0) {
      chargeSpan.textContent = '0';
      chargeUnitSpan.textContent = 'C';
    } else {
      const formattedQ = formatWithUnit(Q_coulombs, 'C');
      chargeSpan.textContent = formattedQ.value;
      chargeUnitSpan.textContent = formattedQ.unit;
    }

    // Format and display energy
    if (E_joules === 0) {
      energySpan.textContent = '0';
      energyUnitSpan.textContent = 'J';
    } else {
      const formattedE = formatWithUnit(E_joules, 'J');
      energySpan.textContent = formattedE.value;
      energyUnitSpan.textContent = formattedE.unit;
    }

    // Format and display time constant
    if (tau_seconds === 0) {
      tauSpan.textContent = '0';
      tauUnitSpan.textContent = 's';
    } else {
      const formattedTau = formatWithUnit(tau_seconds, 's');
      tauSpan.textContent = formattedTau.value;
      tauUnitSpan.textContent = formattedTau.unit;
    }
  }

  // Attach event listeners
  capacitanceInput.addEventListener('input', updateResults);
  capUnitSelect.addEventListener('change', updateResults);
  voltageInput.addEventListener('input', updateResults);
  resistanceInput.addEventListener('input', updateResults);
  resUnitSelect.addEventListener('change', updateResults);

  // Initial calculation
  updateResults();
});