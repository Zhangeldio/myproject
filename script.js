const formulas = [
    // Механические явления
    {
        title: 'Закон Ома',
        formula: 'U = I × R',
        description: 'Напряжение в электрической цепи',
        icon: '⚡',
        category: 'Электрические явления',
        inputs: [
            { id: 'current', label: 'Ток', unit: 'A', placeholder: '5' },
            { id: 'resistance', label: 'Сопротивление', unit: 'Ω', placeholder: '10' },
        ],
        calculate: (v) => v.current * v.resistance,
        resultUnit: 'В',
        resultLabel: 'Напряжение',
        maxProgress: 100,
    },
    {
        title: 'Сила тяжести',
        formula: 'F = m × g',
        description: 'Сила притяжения к Земле (g = 9.8 м/с²)',
        icon: '⬇️',
        category: 'Механические явления',
        inputs: [{ id: 'mass', label: 'Масса', unit: 'кг', placeholder: '10' }],
        calculate: (v) => v.mass * 9.8,
        resultUnit: 'Н',
        resultLabel: 'Сила',
        maxProgress: 500,
    },
    {
        title: 'Кинетическая энергия',
        formula: 'E = (m × v²) / 2',
        description: 'Энергия движущегося тела',
        icon: '🚀',
        category: 'Механические явления',
        inputs: [
            { id: 'mass', label: 'Масса', unit: 'кг', placeholder: '10' },
            { id: 'velocity', label: 'Скорость', unit: 'м/с', placeholder: '5' },
        ],
        calculate: (v) => (v.mass * v.velocity ** 2) / 2,
        resultUnit: 'Дж',
        resultLabel: 'Энергия',
        maxProgress: 1000,
    },
    {
        title: 'Плотность',
        formula: 'ρ = m / V',
        description: 'Масса вещества на единицу объёма',
        icon: '📦',
        category: 'Механические явления',
        inputs: [
            { id: 'mass', label: 'Масса', unit: 'кг', placeholder: '100' },
            { id: 'volume', label: 'Объём', unit: 'м³', placeholder: '10' },
        ],
        calculate: (v) => v.mass / v.volume,
        resultUnit: 'кг/м³',
        resultLabel: 'Плотность',
        maxProgress: 1000,
    },
    {
        title: 'Второй закон Ньютона',
        formula: 'F = m × a',
        description: 'Сила равна произведению массы на ускорение',
        icon: '➡️',
        category: 'Механические явления',
        inputs: [
            { id: 'mass', label: 'Масса', unit: 'кг', placeholder: '5' },
            { id: 'acceleration', label: 'Ускорение', unit: 'м/с²', placeholder: '10' },
        ],
        calculate: (v) => v.mass * v.acceleration,
        resultUnit: 'Н',
        resultLabel: 'Сила',
        maxProgress: 500,
    },
    {
        title: 'Потенциальная энергия',
        formula: 'E = m × g × h',
        description: 'Энергия положения тела над поверхностью',
        icon: '⛰️',
        category: 'Механические явления',
        inputs: [
            { id: 'mass', label: 'Масса', unit: 'кг', placeholder: '10' },
            { id: 'height', label: 'Высота', unit: 'м', placeholder: '5' },
        ],
        calculate: (v) => v.mass * 9.8 * v.height,
        resultUnit: 'Дж',
        resultLabel: 'Энергия',
        maxProgress: 1000,
    },
    {
        title: 'Скорость',
        formula: 'v = s / t',
        description: 'Отношение пройденного пути ко времени',
        icon: '🎯',
        category: 'Механические явления',
        inputs: [
            { id: 'distance', label: 'Расстояние', unit: 'м', placeholder: '100' },
            { id: 'time', label: 'Время', unit: 'с', placeholder: '10' },
        ],
        calculate: (v) => v.distance / v.time,
        resultUnit: 'м/с',
        resultLabel: 'Скорость',
        maxProgress: 50,
    },

    // Тепловые явления
    {
        title: 'Количество теплоты',
        formula: 'Q = m × c × ΔT',
        description: 'Энергия, необходимая для изменения температуры',
        icon: '🔥',
        category: 'Тепловые явления',
        inputs: [
            { id: 'mass', label: 'Масса', unit: 'кг', placeholder: '1' },
            { id: 'capacity', label: 'Удельная теплоёмкость', unit: 'Дж/(кг·K)', placeholder: '4200' },
            { id: 'deltaT', label: 'Изменение температуры', unit: 'K', placeholder: '10' },
        ],
        calculate: (v) => v.mass * v.capacity * v.deltaT,
        resultUnit: 'Дж',
        resultLabel: 'Количество теплоты',
        maxProgress: 100000,
    },
    {
        title: 'Тепловая мощность',
        formula: 'P = Q / t',
        description: 'Количество теплоты, выделяемое в единицу времени',
        icon: '⚙️',
        category: 'Тепловые явления',
        inputs: [
            { id: 'heat', label: 'Количество теплоты', unit: 'Дж', placeholder: '50000' },
            { id: 'time', label: 'Время', unit: 'с', placeholder: '60' },
        ],
        calculate: (v) => v.heat / v.time,
        resultUnit: 'Вт',
        resultLabel: 'Мощность',
        maxProgress: 5000,
    },
    {
        title: 'КПД теплового двигателя',
        formula: 'η = (Q₁ - Q₂) / Q₁ × 100%',
        description: 'Эффективность преобразования теплоты в работу',
        icon: '🔄',
        category: 'Тепловые явления',
        inputs: [
            { id: 'Q1', label: 'Теплота от нагревателя', unit: 'Дж', placeholder: '1000' },
            { id: 'Q2', label: 'Теплота холодильнику', unit: 'Дж', placeholder: '300' },
        ],
        calculate: (v) => ((v.Q1 - v.Q2) / v.Q1) * 100,
        resultUnit: '%',
        resultLabel: 'КПД',
        maxProgress: 100,
    },

    // Электрические явления
    {
        title: 'Мощность электрического тока',
        formula: 'P = U × I',
        description: 'Энергия, потребляемая электрическим устройством',
        icon: '💡',
        category: 'Электрические явления',
        inputs: [
            { id: 'voltage', label: 'Напряжение', unit: 'В', placeholder: '220' },
            { id: 'current', label: 'Ток', unit: 'А', placeholder: '2' },
        ],
        calculate: (v) => v.voltage * v.current,
        resultUnit: 'Вт',
        resultLabel: 'Мощность',
        maxProgress: 5000,
    },
    {
        title: 'Сопротивление проводника',
        formula: 'R = ρ × l / S',
        description: 'Сопротивление зависит от материала, длины и сечения',
        icon: '〰️',
        category: 'Электрические явления',
        inputs: [
            { id: 'rho', label: 'Удельное сопротивление', unit: 'Ом·м', placeholder: '0.000000017' },
            { id: 'length', label: 'Длина проводника', unit: 'м', placeholder: '100' },
            { id: 'area', label: 'Площадь сечения', unit: 'м²', placeholder: '0.0001' },
        ],
        calculate: (v) => (v.rho * v.length) / v.area,
        resultUnit: 'Ω',
        resultLabel: 'Сопротивление',
        maxProgress: 100,
    },
    {
        title: 'Работа электрического тока',
        formula: 'A = U × I × t',
        description: 'Энергия, передаваемая электрическим током',
        icon: '⚡🔋',
        category: 'Электрические явления',
        inputs: [
            { id: 'voltage', label: 'Напряжение', unit: 'В', placeholder: '220' },
            { id: 'current', label: 'Ток', unit: 'А', placeholder: '2' },
            { id: 'time', label: 'Время', unit: 'с', placeholder: '3600' },
        ],
        calculate: (v) => v.voltage * v.current * v.time,
        resultUnit: 'Дж',
        resultLabel: 'Работа',
        maxProgress: 10000000,
    },

    // Оптические явления
    {
        title: 'Закон преломления Снеллиуса',
        formula: 'n₁ × sin(θ₁) = n₂ × sin(θ₂)',
        description: 'Связь между углами падения и преломления',
        icon: '🔍',
        category: 'Оптические явления',
        inputs: [
            { id: 'n1', label: 'Показатель преломления 1', unit: '', placeholder: '1' },
            { id: 'n2', label: 'Показатель преломления 2', unit: '', placeholder: '1.33' },
            { id: 'angle1', label: 'Угол падения', unit: '°', placeholder: '45' },
        ],
        calculate: (v) => Math.asin((v.n1 * Math.sin((v.angle1 * Math.PI) / 180)) / v.n2) * (180 / Math.PI),
        resultUnit: '°',
        resultLabel: 'Угол преломления',
        maxProgress: 90,
    },
    {
        title: 'Фокусное расстояние линзы',
        formula: '1/F = 1/d + 1/f',
        description: 'Связь фокусного расстояния с расстояниями до объекта и изображения',
        icon: '🔬',
        category: 'Оптические явления',
        inputs: [
            { id: 'distance_f', label: 'Расстояние до объекта', unit: 'см', placeholder: '30' },
            { id: 'distance_i', label: 'Расстояние до изображения', unit: 'см', placeholder: '20' },
        ],
        calculate: (v) => 1 / (1 / v.distance_f + 1 / v.distance_i),
        resultUnit: 'см',
        resultLabel: 'Фокусное расстояние',
        maxProgress: 100,
    },

    // Волновые явления
    {
        title: 'Длина волны',
        formula: 'λ = v / f',
        description: 'Отношение скорости волны к её частоте',
        icon: '〰️',
        category: 'Волновые явления',
        inputs: [
            { id: 'velocity', label: 'Скорость волны', unit: 'м/с', placeholder: '343' },
            { id: 'frequency', label: 'Частота', unit: 'Гц', placeholder: '440' },
        ],
        calculate: (v) => v.velocity / v.frequency,
        resultUnit: 'м',
        resultLabel: 'Длина волны',
        maxProgress: 2,
    },
    {
        title: 'Громкость звука',
        formula: 'L = 10 × log₁₀(I / I₀)',
        description: 'Уровень громкости в децибелах (I₀ = 10⁻¹² Вт/м²)',
        icon: '🔊',
        category: 'Волновые явления',
        inputs: [
            { id: 'intensity', label: 'Интенсивность звука', unit: 'Вт/м²', placeholder: '0.001' },
        ],
        calculate: (v) => 10 * Math.log10(v.intensity / 1e-12),
        resultUnit: 'дБ',
        resultLabel: 'Громкость',
        maxProgress: 140,
    },
];

function getCategories() {
    const categories = [...new Set(formulas.map(f => f.category))];
    return ['Все', ...categories];
}

function createFormulaCard(formula) {
    const card = document.createElement('div');
    card.className = 'formula-card';
    card.dataset.category = formula.category;

    const inputsHTML = formula.inputs.map(input => `
        <div class="input-group">
            <label class="input-label">${input.label} ${input.unit ? `(${input.unit})` : ''}</label>
            <div class="input-wrapper">
                <input 
                    type="number" 
                    class="input-field formula-input" 
                    placeholder="${input.placeholder}"
                    data-formula-index="${formulas.indexOf(formula)}"
                    data-input-id="${input.id}"
                    step="any"
                />
                ${input.unit ? `<span class="input-unit">${input.unit}</span>` : ''}
            </div>
        </div>
    `).join('');

    card.innerHTML = `
        <div class="card-inner">
            <div class="card-header">
                <div class="icon-container">${formula.icon}</div>
                <div>
                    <h3 class="card-title">${formula.title}</h3>
                    <p class="card-description">${formula.description}</p>
                    <p class="card-category">${formula.category}</p>
                </div>
            </div>

            <div class="formula-box">
                <p class="formula-text">${formula.formula}</p>
            </div>

            <div class="inputs-container">
                ${inputsHTML}
            </div>

            <div class="result-box">
                <span class="result-label">${formula.resultLabel}:</span>
                <span class="result-value" data-formula-result="${formulas.indexOf(formula)}">
                    <span class="result-placeholder">—</span>
                </span>
            </div>

            <div class="progress-container">
                <div class="progress-header">
                    <span>Визуализация</span>
                    <span class="progress-percent" data-formula-progress="${formulas.indexOf(formula)}">0%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" data-formula-fill="${formulas.indexOf(formula)}" style="width: 0%"></div>
                </div>
            </div>
        </div>
    `;

    return card;
}

function updateFormulaResults(formulaIndex) {
    const formula = formulas[formulaIndex];
    const inputs = document.querySelectorAll(`.formula-input[data-formula-index="${formulaIndex}"]`);
    
    const values = {};
    let allFilled = true;

    inputs.forEach(input => {
        const value = parseFloat(input.value || '');
        const inputId = input.dataset.inputId;
        
        if (isNaN(value) || input.value === '') {
            allFilled = false;
        } else {
            values[inputId] = value;
        }
    });

    const resultElement = document.querySelector(`[data-formula-result="${formulaIndex}"]`);
    const progressElement = document.querySelector(`[data-formula-fill="${formulaIndex}"]`);
    const percentElement = document.querySelector(`[data-formula-progress="${formulaIndex}"]`);

    if (allFilled) {
        try {
            const result = formula.calculate(values);
            resultElement.innerHTML = `${result.toFixed(2)} <span class="result-unit">${formula.resultUnit}</span>`;
            
            const progressValue = Math.min((Math.abs(result) / formula.maxProgress) * 100, 100);
            progressElement.style.width = progressValue + '%';
            percentElement.textContent = progressValue.toFixed(0) + '%';
        } catch (e) {
            resultElement.innerHTML = '<span class="result-placeholder">Ошибка</span>';
            progressElement.style.width = '0%';
            percentElement.textContent = '0%';
        }
    } else {
        resultElement.innerHTML = '<span class="result-placeholder">—</span>';
        progressElement.style.width = '0%';
        percentElement.textContent = '0%';
    }
}

function filterByCategory(category) {
    const cards = document.querySelectorAll('.formula-card');
    cards.forEach(card => {
        if (category === 'Все' || card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    const cardsGrid = document.getElementById('cardsGrid');
    const categoriesContainer = document.getElementById('categoriesContainer');

    // Создаём кнопки категорий
    const categories = getCategories();
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = `category-btn ${category === 'Все' ? 'active' : ''}`;
        btn.textContent = category;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterByCategory(category);
        });
        categoriesContainer.appendChild(btn);
    });

    // Создаём карточки
    formulas.forEach((formula, index) => {
        const card = createFormulaCard(formula);
        cardsGrid.appendChild(card);

        const inputs = card.querySelectorAll('.formula-input');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                updateFormulaResults(index);
            });
        });
    });
});

