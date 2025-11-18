<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora - Taller Git</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="calculator">
            <h1>Calculadora Git</h1>
            <p class="subtitle">Taller de Git y GitHub - Nycolas & Juan Pablo</p>
            
            <div class="display">
                <input type="text" id="display" readonly placeholder="0">
            </div>
            
            <div class="buttons">
                <!-- Números -->
                <button class="btn number" onclick="appendNumber('7')">7</button>
                <button class="btn number" onclick="appendNumber('8')">8</button>
                <button class="btn number" onclick="appendNumber('9')">9</button>
                <button class="btn operator" onclick="setOperation('divide')">÷</button>
                
                <button class="btn number" onclick="appendNumber('4')">4</button>
                <button class="btn number" onclick="appendNumber('5')">5</button>
                <button class="btn number" onclick="appendNumber('6')">6</button>
                <button class="btn operator" onclick="setOperation('multiply')">×</button>
                
                <button class="btn number" onclick="appendNumber('1')">1</button>
                <button class="btn number" onclick="appendNumber('2')">2</button>
                <button class="btn number" onclick="appendNumber('3')">3</button>
                <button class="btn operator" onclick="setOperation('subtract')">-</button>
                
                <button class="btn number" onclick="appendNumber('0')">0</button>
                <button class="btn number" onclick="appendNumber('.')">.</button>
                <button class="btn equals" onclick="calculate()">=</button>
                <button class="btn operator" onclick="setOperation('add')">+</button>
                
                <button class="btn clear" onclick="clearDisplay()">C</button>
                <button class="btn clear" onclick="deleteLast()">←</button>
            </div>
            
            <div class="history">
                <h3>Historial</h3>
                <div id="history-list"></div>
            </div>
        </div>
        
        <div class="info">
            <h2>Información del Proyecto</h2>
            <p><strong>Desarrolladores:</strong> Nycolas y Juan Pablo</p>
            <p><strong>Tecnologías:</strong> PHP, JavaScript, CSS</p>
            <p><strong>Operaciones:</strong></p>
            <ul>
                <li>✅ Suma</li>
                <li>✅ Resta</li>
                <li>✅ Multiplicación</li>
                <li>✅ División</li>
            </ul>
        </div>
    </div>
    
    <script src="calculator.js"></script>
</body>
</html>