const conversorFormulas = 
{

    "Centímetro": {
        "Metro": 0.01,
        "Polegada": 0.393701
    }
    ,
    "Metro": {
        "Centímetro": 100,
        "Polegada": 39.3701
    }
    ,
    "Polegada": {
        "Centímetro":2.54,
        "Metro": 0.0254,
    }
    ,
    "Celsius": {
        "Fahrenheit": "(input * 9/5) + 32",
        "Kelvin": "input + 273.15"
    },
    "Fahrenheit": {
        "Celsius": "(input - 32) * 5/9",
        "Kelvin": "(input - 32) * 5/9 + 273.15"
    },
    "Kelvin": {
        "Fahrenheit": "(input - 273.15) * 9/5 + 32",
        "Celsius": "input - 273.15"
    }
    ,
    "Grama": {
        "Quilograma": 0.001,
        "Libra": 0.00220462
    }
    ,
    "Quilograma":{
        "Grama": 1000,
        "Libra": 2.20462,
    }
    ,
    "Libra": {
        "Grama": 453.592,
        "Quilograma": 0.453592,
    }
}
export default formulaconversor