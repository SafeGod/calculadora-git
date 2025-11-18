// ============================================
// CALCULADORA - TALLER GIT & GITHUB
// Nycolas (Persona A): Suma y Resta
// Juan Pablo (Persona B): Multiplicación y División
// ============================================

// Variables globales
let currentValue = '';
let previousValue = '';
let operation = null;
let history = [];

// Función para agregar números al display
function appendNumber(number) {
    if (number === '.' && currentValue.includes('.')) return;
    currentValue += number;
    updateDisplay();
}

// Función para actualizar el display
function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentValue || '0';
}

// Función para establecer la operación
function setOperation(op) {
    if (currentValue === '') return;
    if (previousValue !== '') {
        calculate();
    }
    operation = op;
    previousValue = currentValue;
    currentValue = '';
}

// Función para limpiar el display
function clearDisplay() {
    currentValue = '';
    previousValue = '';
    operation = null;
    updateDisplay();
}

// Función para borrar el último carácter
function deleteLast() {
    currentValue = currentValue.slice(0, -1);
    updateDisplay();
}

// ============================================
// PERSONA A (NYCOLAS): IMPLEMENTAR ESTAS FUNCIONES
// ============================================

/**
 * Función para sumar dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} - Resultado de la suma
 */
function add(a, b) {
    // TODO: Implementar la suma
    // return a + b;
    return 0; // Placeholder - NYCOLAS: reemplazar con la implementación
}

/**
 * Función para restar dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} - Resultado de la resta
 */
function subtract(a, b) {
    // TODO: Implementar la resta
    // return a - b;
    return 0; // Placeholder - NYCOLAS: reemplazar con la implementación
}

// ============================================
// PERSONA B (JUAN PABLO): IMPLEMENTAR ESTAS FUNCIONES
// ============================================

/**
 * Función para multiplicar dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} - Resultado de la multiplicación
 */
function multiply(a, b) {
    // TODO: Implementar la multiplicación
    // return a * b;
    return 0; // Placeholder - JUAN PABLO: reemplazar con la implementación
}

/**
 * Función para dividir dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número (divisor)
 * @returns {number} - Resultado de la división
 */
function divide(a, b) {
    // TODO: Implementar la división
    // IMPORTANTE: Validar que b no sea 0
    // if (b === 0) {
    //     alert('Error: No se puede dividir por cero');
    //     return 0;
    // }
    // return a / b;
    return 0; // Placeholder - JUAN PABLO: reemplazar con la implementación
}

// ============================================
// FUNCIÓN PRINCIPAL DE CÁLCULO
// ============================================

function calculate() {
    if (operation === null || previousValue === '' || currentValue === '') return;
    
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    let result = 0;
    
    // Ejecutar la operación correspondiente
    switch(operation) {
        case 'add':
            result = add(prev, current);
            break;
        case 'subtract':
            result = subtract(prev, current);
            break;
        case 'multiply':
            result = multiply(prev, current);
            break;
        case 'divide':
            result = divide(prev, current);
            break;
        default:
            return;
    }
    
    // Agregar al historial
    addToHistory(prev, current, operation, result);
    
    // Actualizar valores
    currentValue = result.toString();
    operation = null;
    previousValue = '';
    updateDisplay();
}

// ============================================
// FUNCIÓN PARA AGREGAR AL HISTORIAL
// ============================================

function addToHistory(num1, num2, op, result) {
    const symbols = {
        'add': '+',
        'subtract': '-',
        'multiply': '×',
        'divide': '÷'
    };
    
    const entry = `${num1} ${symbols[op]} ${num2} = ${result}`;
    history.push(entry);
    
    // Mostrar en el DOM
    const historyList = document.getElementById('history-list');
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    historyItem.textContent = entry;
    historyList.insertBefore(historyItem, historyList.firstChild);
    
    // Limitar a las últimas 5 operaciones
    if (historyList.children.length > 5) {
        historyList.removeChild(historyList.lastChild);
    }
}

// ============================================
// INICIALIZACIÓN
// ============================================

// Inicializar display al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    updateDisplay();
    console.log('Calculadora inicializada - Taller Git');
    console.log('Desarrolladores: Nycolas & Juan Pablo');
});

// Soporte para teclado (opcional - pueden implementarlo después)
document.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9') {
        appendNumber(event.key);
    } else if (event.key === '.') {
        appendNumber('.');
    } else if (event.key === '+') {
        setOperation('add');
    } else if (event.key === '-') {
        setOperation('subtract');
    } else if (event.key === '*') {
        setOperation('multiply');
    } else if (event.key === '/') {
        event.preventDefault();
        setOperation('divide');
    } else if (event.key === 'Enter' || event.key === '=') {
        calculate();
    } else if (event.key === 'Escape') {
        clearDisplay();
    } else if (event.key === 'Backspace') {
        deleteLast();
    }
});