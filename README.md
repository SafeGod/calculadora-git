# Calculadora - Taller Git & GitHub

Proyecto desarrollado como parte del taller de Git y GitHub, implementando una calculadora básica con trabajo colaborativo en pareja.

## Equipo de Desarrollo

- **Persona A (Nycolas):** Implementación de suma y resta
- **Persona B (Juan Pablo):** Implementación de multiplicación y división

## Tecnologías Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** PHP
- **Control de versiones:** Git & GitHub

## Funcionalidades

- ✅ Suma
- ✅ Resta
- ✅ Multiplicación
- ✅ División (con validación de división por cero)
- ✅ Historial de operaciones
- ✅ Interfaz responsive
- ✅ Soporte para teclado

## Instalación y Uso

### Requisitos Previos
- PHP 7.4 o superior
- Servidor web (Apache, Nginx) o PHP built-in server
- Git instalado

### Pasos para ejecutar localmente

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/calculadora-git.git
cd calculadora-git
```

2. Iniciar servidor PHP:
```bash
php -S localhost:8000
```

3. Abrir en el navegador:
```
http://localhost:8000
```

## Flujo de Trabajo Git - Paso a Paso

### Fase 1: Inicialización del Proyecto (Nycolas)

#### 1.1 Crear repositorio local
```bash
# Crear carpeta del proyecto
mkdir calculadora-git
cd calculadora-git

# Inicializar Git
git init
```

#### 1.2 Crear archivos iniciales
- index.php
- calculator.js
- styles.css
- README.md
- .gitignore

#### 1.3 Primer commit
```bash
git add .
git commit -m "Initial commit: estructura básica del proyecto"
```

#### 1.4 Conectar con GitHub
```bash
# Crear repositorio en GitHub primero, luego:
git remote add origin https://github.com/tu-usuario/calculadora-git.git
git branch -M master  # o main, según tu preferencia
git push -u origin master
```

### Fase 2: Desarrollo de Funcionalidades

#### 2.1 Nycolas - Suma y Resta (Rama: rama-operaciones-basicas)

```bash
# Crear y cambiar a nueva rama
git checkout -b rama-operaciones-basicas

# Implementar funciones add() y subtract() en calculator.js
# (código en el archivo)

# Añadir cambios
git add calculator.js
git commit -m "feat: implementar operaciones de suma y resta"

# Subir rama al repositorio remoto
git push -u origin rama-operaciones-basicas
```

**Capturas requeridas:**
- ✅ `git checkout -b rama-operaciones-basicas`
- ✅ `git commit -m "feat: ..."`
- ✅ `git push`

#### 2.2 Juan Pablo - Multiplicación y División (Rama: rama-operaciones-avanzadas)

```bash
# Clonar el repositorio (si no lo tiene)
git clone https://github.com/tu-usuario/calculadora-git.git
cd calculadora-git

# Crear y cambiar a nueva rama
git checkout -b rama-operaciones-avanzadas

# Implementar funciones multiply() y divide() en calculator.js
# (código en el archivo)

# Añadir cambios
git add calculator.js
git commit -m "feat: implementar multiplicación y división"

# Subir rama al repositorio remoto
git push -u origin rama-operaciones-avanzadas
```

**Capturas requeridas:**
- ✅ `git clone`
- ✅ `git checkout -b rama-operaciones-avanzadas`
- ✅ `git commit -m "feat: ..."`
- ✅ `git push`

### Fase 3: Demostración de Comandos Requeridos

#### 3.1 git reset . (deshacer staging)
```bash
# Hacer cambios en un archivo
echo "// Comentario temporal" >> calculator.js

# Añadir al staging
git add .

# Deshacer el staging (CAPTURAR PANTALLA)
git reset .

# Verificar estado
git status
```

#### 3.2 git checkout -- . (descartar cambios)
```bash
# Hacer cambios temporales
echo "// Prueba" >> calculator.js

# Descartar cambios (CAPTURAR PANTALLA)
git checkout -- .

# Verificar que se revirtieron los cambios
cat calculator.js
```

#### 3.3 git log (ver historial)
```bash
# Ver historial completo (CAPTURAR PANTALLA)
git log

# Ver historial resumido
git log --oneline

# Ver historial con gráfico
git log --oneline --graph --all
```

#### 3.4 git commit --amend (modificar último commit)
```bash
# Hacer un commit
git commit -m "feat: agregar validacion"

# Darse cuenta de un error en el mensaje
# Modificar el último commit (CAPTURAR PANTALLA)
git commit --amend -m "feat: agregar validación de entrada"
```

#### 3.5 git switch -c (alternativa moderna)
```bash
# Crear y cambiar a rama con switch (CAPTURAR PANTALLA)
git switch -c rama-mejoras-ui

# Es equivalente a: git checkout -b rama-mejoras-ui
```

### Fase 4: Merge y Finalización

#### 4.1 Merge de ramas (Nycolas)
```bash
# Volver a la rama principal
git checkout master

# Actualizar desde remoto
git pull origin master

# Mergear rama de operaciones básicas (CAPTURAR PANTALLA)
git merge rama-operaciones-basicas

# Subir cambios
git push

# Mergear rama de operaciones avanzadas (CAPTURAR PANTALLA)
git merge rama-operaciones-avanzadas

# Si hay conflictos, resolverlos manualmente, luego:
git add .
git commit -m "Merge: integrar todas las operaciones"
git push
```

#### 4.2 Eliminar ramas (CAPTURAR PANTALLA)
```bash
# Eliminar ramas locales
git branch -d rama-operaciones-basicas
git branch -d rama-operaciones-avanzadas

# Eliminar ramas remotas (opcional)
git push origin --delete rama-operaciones-basicas
git push origin --delete rama-operaciones-avanzadas
```

## Commits Esperados (Mínimo 5)

1. ✅ Initial commit: estructura básica del proyecto
2. ✅ feat: implementar operaciones de suma y resta (Nycolas)
3. ✅ feat: implementar multiplicación y división (Juan Pablo)
4. ✅ fix: agregar validación división por cero (Juan Pablo)
5. ✅ docs: actualizar README con instrucciones completas
6. ✅ Merge: integrar todas las operaciones

## Comandos Git Utilizados

| Comando | Descripción | Evidenciado |
|---------|-------------|-------------|
| `git init` | Inicializar repositorio | ✅ |
| `git add .` | Añadir archivos al staging | ✅ |
| `git reset .` | Quitar archivos del staging | ✅ |
| `git commit` | Crear commit | ✅ |
| `git commit -am` | Add y commit en un comando | ✅ |
| `git commit --amend` | Modificar último commit | ✅ |
| `git checkout -b` | Crear y cambiar de rama | ✅ |
| `git checkout master` | Cambiar a rama master | ✅ |
| `git checkout -- .` | Descartar cambios locales | ✅ |
| `git switch -c` | Alternativa moderna para crear rama | ✅ |
| `git merge` | Fusionar ramas | ✅ |
| `git branch -d` | Eliminar rama local | ✅ |
| `git push` | Subir cambios al remoto | ✅ |
| `git pull` | Traer cambios del remoto | ✅ |
| `git log` | Ver historial de commits | ✅ |

## Estructura del Proyecto

```
calculadora-git/
│
├── index.php          # Interfaz principal HTML
├── calculator.js      # Lógica de la calculadora
├── styles.css         # Estilos CSS
├── README.md          # Este archivo
└── .gitignore         # Archivos a ignorar
```

## Capturas de Pantalla Requeridas

### Lista de verificación:
- [ ] `git init` - Inicialización del repositorio
- [ ] `git add .` y `git reset .` - Gestión del staging
- [ ] `git commit -m "..."` - Varios commits
- [ ] `git commit --amend` - Modificación de commit
- [ ] `git checkout -b rama-nombre` - Creación de ramas
- [ ] `git log --oneline` - Historial de commits
- [ ] `git merge` - Fusión de ramas
- [ ] `git branch -d rama-nombre` - Eliminación de ramas
- [ ] `git push` - Subida al remoto
- [ ] Captura de la interfaz funcionando

## Buenas Prácticas Aplicadas

1. **Commits atómicos:** Cada commit representa una funcionalidad completa
2. **Mensajes descriptivos:** Formato `tipo: descripción` (feat, fix, docs)
3. **Ramas por funcionalidad:** Separación clara del trabajo
4. **Resolución de conflictos:** Manejo de merges
5. **Documentación:** README completo y comentarios en código

## Recursos Adicionales

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)

## Notas del Desarrollo

### Nycolas 
- Responsable de operaciones básicas (suma, resta)
- Configuración inicial del proyecto
- Merge final de todas las ramas

### Juan Pablo 
- Responsable de operaciones avanzadas (multiplicación, división)
- Implementación de validación de división por cero
- Pruebas de funcionalidades