
//Nessa parte, ajustei apenas funcionamento do Menu

window.onload = function() {
    var measurementElement = document.getElementById('medida');
    measurementElement.onchange = atualizarUnidades;
};
// utilizei essa função para atualizar as unidades de medida 
function atualizarUnidades() {
    var measurementElement = document.getElementById('medida');
    var unitFromElement = document.getElementById('unitFrom');
    var unitToElement = document.getElementById('unitTo');
    var valueElement = document.getElementById('numero-converter');
    var resultElement = document.getElementById('exibe-resultado');

    // limpa as opções
    unitFromElement.innerHTML = '';
    unitToElement.innerHTML = '';

    // seleção padrão

    var optionDefault = document.createElement('option');
    optionDefault.value = '';
    optionDefault.text = 'Selecione a unidade';
    unitFromElement.appendChild(optionDefault.cloneNode(true));
    unitToElement.appendChild(optionDefault.cloneNode(true));
    
    //limpa o valor inserido e o resultado ao selecionar uma nova unidade
    valueElement.value = '';
    resultElement.value = '';

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
//Nessa parte, configurei a conversão

//configuração da função que usei para converter e configurar o botão
window.onload = function() {
    var measurementElement = document.getElementById('medida');
    measurementElement.onchange = atualizarUnidades;
    var converterButton = document.getElementById('Converter');
    converterButton.onclick = converter;
};

//função para converter os valores

function converter() {
    var unitFromElement = document.getElementById('unitFrom');
    var unitToElement = document.getElementById('unitTo');
    var valueElement = document.getElementById('numero-converter');
    var resultElement = document.getElementById('exibe-resultado');

    var unitFrom = unitFromElement.value;
    var unitTo = unitToElement.value;
    var value = parseFloat(valueElement.value);

    if (isNaN(value)) {
    resultElement.value = 'Insira um valor válido.';
    return;
    }

    var medidaSelecionada = document.getElementById('medida').value;

    //conversor de massa
    if (medidaSelecionada === 'massa') {
    if (unitFrom === 'g' && unitTo === 'kg') {
        resultElement.value = value / 1000;
    } else if (unitFrom === 'kg' && unitTo === 'g') {
        resultElement.value = value * 1000;
    } else if (unitFrom === 'g' && unitTo === 'lb') {
        resultElement.value = value * 0.00220462;
    } else if (unitFrom === 'lb' && unitTo === 'g') {
        resultElement.value = value / 0.00220462;
    } else if (unitFrom === 'kg' && unitTo === 'lb') {
        resultElement.value = value * 2.20462;
    } else if (unitFrom === 'lb' && unitTo === 'kg') {
        resultElement.value = value / 2.20462;
    } else {
        resultElement.value = 'Conversão não suportada.';
    }

    //conversor de temperatura

    } else if (medidaSelecionada === 'temperatura') {
    if (unitFrom === 'c' && unitTo === 'f') {
        resultElement.value = (value * 9 / 5) + 32;
    } else if (unitFrom === 'f' && unitTo === 'c') {
        resultElement.value = (value - 32) * 5 / 9;
    } else if (unitFrom === 'c' && unitTo === 'k') {
        resultElement.value = value + 273.15;
    } else if (unitFrom === 'k' && unitTo === 'c') {
        resultElement.value = value - 273.15;
    } else if (unitFrom === 'f' && unitTo === 'k') {
        resultElement.value = (value + 459.67) * 5 / 9;
    } else if (unitFrom === 'k' && unitTo === 'f') {
        resultElement.value = (value * 9 / 5) - 459.67;
    } else {
        resultElement.value = 'Conversão não suportada.';
    }

    //conversor de comprimento

    } else if (medidaSelecionada === 'comprimento') {
    if (unitFrom === 'm' && unitTo === 'cm') {
        resultElement.value = value * 100;
    } else if (unitFrom === 'cm' && unitTo === 'm') {
        resultElement.value = value / 100;
    } else if (unitFrom === 'm' && unitTo === 'pol') {
        resultElement.value = value * 39.3701;
    } else if (unitFrom === 'pol' && unitTo === 'm') {
        resultElement.value = value / 39.3701;
    } else if (unitFrom === 'cm' && unitTo === 'pol') {
        resultElement.value = value / 2.54;
    } else if (unitFrom === 'pol' && unitTo === 'cm') {
        resultElement.value = value * 2.54;
    } else {
        resultElement.value = 'Conversão não suportada.';
    }
    }
}
