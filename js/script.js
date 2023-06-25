import formulaconversor from "./formulas";

window.onload = function() {
    var measurementElement = document.getElementById('medida');
    measurementElement.onchange = atualizarUnidades;
};

function atualizarUnidades() {
    var measurementElement = document.getElementById('medida');
    var unitFromElement = document.getElementById('unitFrom');
    var unitToElement = document.getElementById('unitTo');
    // limpa as opções
    unitFromElement.innerHTML = '';
    unitToElement.innerHTML = '';
    // seleção padrão
    var optionDefault = document.createElement('option');
    optionDefault.value = '';
    optionDefault.text = 'Selecione a unidade';
    unitFromElement.appendChild(optionDefault.cloneNode(true));
    unitToElement.appendChild(optionDefault.cloneNode(true));
    // mostra as unidades correspondentes a medida selecionada
    var medidaSelecionada = measurementElement.value;
    var unidadesFrom = unidades[medidaSelecionada];
    var unidadesTo = unidades[medidaSelecionada + '-to'];
    for (var i = 0; i < unidadesFrom.length; i++) {
    var optionFrom = document.createElement('option');
    optionFrom.value = unidadesFrom[i].value;
    optionFrom.text = unidadesFrom[i].text;
    unitFromElement.appendChild(optionFrom);
    }
    for (var j = 0; j < unidadesTo.length; j++) {
    var optionTo = document.createElement('option');
    optionTo.value = unidadesTo[j].value;
    optionTo.text = unidadesTo[j].text;
    unitToElement.appendChild(optionTo);
    }
}

var unidades = {
    massa: [
    { value: 'g', text: 'Grama (g)' },
    { value: 'kg', text: 'Quilograma (kg)' },
    { value: 'lb', text: 'Libra (lb)' }
    ],
    'massa-to': [
    { value: 'g', text: 'Grama (g)' },
    { value: 'kg', text: 'Quilograma (kg)' },
    { value: 'lb', text: 'Libra (lb)' }
    ],
    temperatura: [
    { value: 'c', text: 'Celsius (°C)' },
    { value: 'f', text: 'Fahrenheit (°F)' },
    { value: 'k', text: 'Kelvin (K)' }
    ],
    'temperatura-to': [
    { value: 'c', text: 'Celsius (°C)' },
    { value: 'f', text: 'Fahrenheit (°F)' },
    { value: 'k', text: 'Kelvin (K)' }
    ],
    comprimento: [
    { value: 'm', text: 'Metro (m)' },
    { value: 'cm', text: 'Centímetro (cm)' },
    { value: 'pol', text: 'Polegadas (pol)' }
    ],
    'comprimento-to': [
    { value: 'm', text: 'Metro (m)' },
    { value: 'cm', text: 'Centímetro (cm)' },
    { value: 'pol', text: 'Polegadas (pol)' }
    ]
};