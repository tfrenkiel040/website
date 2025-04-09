// DOM Elements
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const stepLabels = document.querySelectorAll('.step-label');
const formSections = document.querySelectorAll('.form-section');

// Modal Elements
const modals = document.querySelectorAll('.modal');
const helpIcons = document.querySelectorAll('.help-icon');
const closeButtons = document.querySelectorAll('.close-modal');

// Welcome Section
const startBtn = document.getElementById('start-btn');

// Cat Info Section
const catForm = document.getElementById('cat-form');
const catPrevBtn = document.getElementById('cat-prev-btn');
const catNextBtn = document.getElementById('cat-next-btn');

// Food Info Section
const foodPrevBtn = document.getElementById('food-prev-btn');
const foodNextBtn = document.getElementById('food-next-btn');
const addDryFoodBtn = document.getElementById('add-dry-food-btn');
const addWetFoodBtn = document.getElementById('add-wet-food-btn');
const dryFoodContainer = document.getElementById('dry-food-container');
const wetFoodContainer = document.getElementById('wet-food-container');
const foodFormTemplate = document.getElementById('food-form-template');

// Results Section
const resultsPrevBtn = document.getElementById('results-prev-btn');
const printBtn = document.getElementById('print-btn');
const restartBtn = document.getElementById('restart-btn');
const resultsContent = document.getElementById('results-content');
const foodDistributionSlider = document.getElementById('food-distribution-slider');
const wetFoodPercentage = document.getElementById('wet-food-percentage');
const dryFoodPercentage = document.getElementById('dry-food-percentage');
const recalculateBtn = document.getElementById('recalculate-btn');

// Global Variables
let currentActive = 1;
let dryFoodCount = 0;
let wetFoodCount = 0;
let catData = {};
let dryFoods = [];
let wetFoods = [];
let lastCalculatedResults = null; // Store the last calculated results

// Pre-defined food options
const predefinedDryFoods = [
    {
        name: "Purizon Adult Sterilised Grain-Free Chicken & Fish",
        liquidPercent: 10.0,
        proteinPercent: 46.0,
        fatPercent: 11.0,
        fibrePercent: 5.1,
        ashPercent: 8.9,
        // Calculate carbohydrate percentage (NFE)
        get carbPercent() { 
            return Math.max(0, 100 - (this.liquidPercent + this.proteinPercent + this.fatPercent + this.fibrePercent + this.ashPercent)); 
        },
        // Calculate calories per gram using Modified Atwater formula
        get caloriesPerGram() { 
            return (this.proteinPercent/100 * 3.5) + (this.fatPercent/100 * 8.5) + (this.carbPercent/100 * 3.5); 
        },
        // Calculate calories per 100g
        get caloriesPer100g() { 
            return this.caloriesPerGram * 100; 
        }
    },
    {
        name: "Purizon Single Meat Chicken with Camomile Blossoms",
        liquidPercent: 10.0,
        proteinPercent: 37.0,
        fatPercent: 20.0,
        fibrePercent: 2.0,
        ashPercent: 8.2,
        // Calculate carbohydrate percentage (NFE)
        get carbPercent() { 
            return Math.max(0, 100 - (this.liquidPercent + this.proteinPercent + this.fatPercent + this.fibrePercent + this.ashPercent)); 
        },
        // Calculate calories per gram using Modified Atwater formula
        get caloriesPerGram() { 
            return (this.proteinPercent/100 * 3.5) + (this.fatPercent/100 * 8.5) + (this.carbPercent/100 * 3.5); 
        },
        // Calculate calories per 100g
        get caloriesPer100g() { 
            return this.caloriesPerGram * 100; 
        }
    }
];

const predefinedWetFoods = [
    {
        name: "Animonda Carny Beef & Chicken",
        liquidPercent: 79.0,
        proteinPercent: 11.5,
        fatPercent: 6.5,
        fibrePercent: 0.5,
        ashPercent: 1.8,
        // Calculate carbohydrate percentage (NFE)
        get carbPercent() { 
            return Math.max(0, 100 - (this.liquidPercent + this.proteinPercent + this.fatPercent + this.fibrePercent + this.ashPercent)); 
        },
        // Calculate calories per gram using Modified Atwater formula
        get caloriesPerGram() { 
            return (this.proteinPercent/100 * 3.5) + (this.fatPercent/100 * 8.5) + (this.carbPercent/100 * 3.5); 
        },
        // Calculate calories per 100g
        get caloriesPer100g() { 
            return this.caloriesPerGram * 100; 
        }
    },
    {
        name: "Applaws Cat Food Chicken Breast",
        liquidPercent: 82.0,
        proteinPercent: 14.0,
        fatPercent: 1.0,
        fibrePercent: 1.0,
        ashPercent: 2.0,
        // Calculate carbohydrate percentage (NFE)
        get carbPercent() { 
            return Math.max(0, 100 - (this.liquidPercent + this.proteinPercent + this.fatPercent + this.fibrePercent + this.ashPercent)); 
        },
        // Calculate calories per gram using Modified Atwater formula
        get caloriesPerGram() { 
            return (this.proteinPercent/100 * 3.5) + (this.fatPercent/100 * 8.5) + (this.carbPercent/100 * 3.5); 
        },
        // Calculate calories per 100g
        get caloriesPer100g() { 
            return this.caloriesPerGram * 100; 
        }
    }
];

// Initialize the application
function init() {
    // Add initial food forms
    addDryFood();
    addWetFood();
    
    // Set up event listeners
    setupEventListeners();
}

// Set up all event listeners
function setupEventListeners() {
    // Navigation buttons
    startBtn.addEventListener('click', () => goToStep(2));
    catPrevBtn.addEventListener('click', () => goToStep(1));
    catNextBtn.addEventListener('click', validateAndGoToFoodInfo);
    foodPrevBtn.addEventListener('click', () => goToStep(2));
    foodNextBtn.addEventListener('click', validateAndCalculateResults);
    resultsPrevBtn.addEventListener('click', () => goToStep(3));
    
    // Food form buttons
    addDryFoodBtn.addEventListener('click', addDryFood);
    addWetFoodBtn.addEventListener('click', addWetFood);
    
    // Results buttons
    printBtn.addEventListener('click', printResults);
    restartBtn.addEventListener('click', resetApp);
    
    // Food distribution slider
    if (foodDistributionSlider) {
        foodDistributionSlider.addEventListener('input', updateDistributionDisplay);
        recalculateBtn.addEventListener('click', recalculateWithNewDistribution);
    }
    
    // Modal functionality
    helpIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const modalId = icon.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'block';
        });
    });
    
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            modal.style.display = 'none';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
}

// Navigation Functions
function goToStep(step) {
    currentActive = step;
    updateUI();
    
    // If going to step 3 (food info), save cat data
    if (step === 3) {
        saveCatData();
    }
}

function updateUI() {
    // Update progress bar
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
    
    // Update step labels
    stepLabels.forEach((label, idx) => {
        if (idx < currentActive) {
            label.classList.add('active');
        } else {
            label.classList.remove('active');
        }
    });
    
    const actives = document.querySelectorAll('.circle.active');
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
    
    // Show active section
    formSections.forEach((section, idx) => {
        section.classList.remove('active');
    });
    formSections[currentActive - 1].classList.add('active');
}

// Validation Functions
function validateAndGoToFoodInfo() {
    const catName = document.getElementById('cat-name').value;
    const neuteringStatus = document.getElementById('neutering-status').value;
    const weightStatus = document.getElementById('weight-status').value;
    const activityLevel = document.getElementById('activity-level').value;
    const catAge = document.getElementById('cat-age').value;
    const catWeight = document.getElementById('cat-weight').value;
    
    if (!catName || !neuteringStatus || !weightStatus || !activityLevel || !catAge || !catWeight) {
        alert('Please fill in all fields about your cat.');
        return;
    }
    
    goToStep(3);
}

function validateAndCalculateResults() {
    console.log('Calculate button clicked');
    
    // Save food data
    saveFoodData();
    
    // Check if we have at least one dry food and one wet food
    if (dryFoods.length === 0) {
        console.log('No dry foods added');
        alert('Please add at least one dry food option.');
        return;
    }
    
    if (wetFoods.length === 0) {
        console.log('No wet foods added');
        alert('Please add at least one wet food option.');
        return;
    }
    
    // Validate all food entries
    const allFoodsValid = [...dryFoods, ...wetFoods].every(food => {
        return food.name && 
               food.liquidPercent !== undefined && 
               food.proteinPercent !== undefined && 
               food.fatPercent !== undefined && 
               food.fibrePercent !== undefined && 
               food.ashPercent !== undefined;
    });
    
    if (!allFoodsValid) {
        console.log('Food validation failed');
        alert('Please fill in all nutritional information for each food.');
        return;
    }
    
    console.log('Validation passed, calculating results');
    // Calculate and display results
    calculateResults();
    goToStep(4);
}

// Data Management Functions
function saveCatData() {
    catData = {
        name: document.getElementById('cat-name').value,
        neuteringStatus: document.getElementById('neutering-status').value,
        weightStatus: document.getElementById('weight-status').value,
        activityLevel: document.getElementById('activity-level').value,
        ageCategory: document.getElementById('cat-age').value,
        weight: parseFloat(document.getElementById('cat-weight').value)
    };
}

function saveFoodData() {
    dryFoods = [];
    wetFoods = [];
    
    // Get all dry food forms
    const dryFoodForms = dryFoodContainer.querySelectorAll('.food-form');
    dryFoodForms.forEach(form => {
        const foodData = getFoodDataFromForm(form);
        if (foodData.name) { // Only add if it has a name (basic validation)
            dryFoods.push(foodData);
        }
    });
    
    // Get all wet food forms
    const wetFoodForms = wetFoodContainer.querySelectorAll('.food-form');
    wetFoodForms.forEach(form => {
        const foodData = getFoodDataFromForm(form);
        if (foodData.name) { // Only add if it has a name (basic validation)
            wetFoods.push(foodData);
        }
    });
}

function getFoodDataFromForm(form) {
    const name = form.querySelector('.food-name').value;
    const liquidPercent = parseFloat(form.querySelector('.liquid-percent').value) || 0;
    const proteinPercent = parseFloat(form.querySelector('.protein-percent').value) || 0;
    const fatPercent = parseFloat(form.querySelector('.fat-percent').value) || 0;
    const fibrePercent = parseFloat(form.querySelector('.fibre-percent').value) || 0;
    const ashPercent = parseFloat(form.querySelector('.ash-percent').value) || 0;
    
    // Calculate carbohydrate percentage (NFE)
    const carbPercent = Math.max(0, 100 - (liquidPercent + proteinPercent + fatPercent + fibrePercent + ashPercent));
    
    // Calculate calories per gram using Modified Atwater formula for pet foods
    // Protein: 3.5 kcal per gram
    // Fat: 8.5 kcal per gram
    // Carbohydrates (NFE): 3.5 kcal per gram
    const caloriesPerGram = (proteinPercent/100 * 3.5) + (fatPercent/100 * 8.5) + (carbPercent/100 * 3.5);
    
    // Calculate calories per 100g
    const caloriesPer100g = caloriesPerGram * 100;
    
    return {
        name,
        type: form.closest('#dry-food-container') ? 'dry' : 'wet',
        liquidPercent,
        proteinPercent,
        fatPercent,
        fibrePercent,
        ashPercent,
        carbPercent,
        caloriesPerGram,
        caloriesPer100g
    };
}

// Food Form Management
function addDryFood() {
    if (dryFoodCount < 2) {
        addFoodForm(dryFoodContainer, ++dryFoodCount, 'dry');
    } else {
        alert('Maximum of 2 dry food options allowed.');
    }
}

function addWetFood() {
    if (wetFoodCount < 2) {
        addFoodForm(wetFoodContainer, ++wetFoodCount, 'wet');
    } else {
        alert('Maximum of 2 wet food options allowed.');
    }
}

function addFoodForm(container, count, foodType) {
    const template = foodFormTemplate.content.cloneNode(true);
    const foodForm = template.querySelector('.food-form');
    
    // Set food number
    foodForm.querySelector('.food-number').textContent = count;
    
    // Add predefined food options to the dropdown
    const foodSelection = foodForm.querySelector('.food-selection');
    const predefinedFoods = foodType === 'dry' ? predefinedDryFoods : predefinedWetFoods;
    
    // Clear existing options except the first one (Custom)
    while (foodSelection.options.length > 1) {
        foodSelection.remove(1);
    }
    
    // Add predefined food options
    predefinedFoods.forEach((food, index) => {
        const option = document.createElement('option');
        option.value = index.toString();
        option.textContent = food.name;
        foodSelection.appendChild(option);
    });
    
    // Add event listeners to calculate carbs automatically
    const liquidInput = foodForm.querySelector('.liquid-percent');
    const proteinInput = foodForm.querySelector('.protein-percent');
    const fatInput = foodForm.querySelector('.fat-percent');
    const fibreInput = foodForm.querySelector('.fibre-percent');
    const ashInput = foodForm.querySelector('.ash-percent');
    const carbInput = foodForm.querySelector('.carb-percent');
    const caloriesPerGramInput = foodForm.querySelector('.calories-per-gram');
    
    // Set default moisture value for dry food
    if (foodType === 'dry') {
        liquidInput.value = '10.0';
    }
    
    // Add hint for moisture content based on food type
    const liquidLabel = liquidInput.previousElementSibling;
    if (foodType === 'dry') {
        // Create a hint element for dry food
        const hint = document.createElement('small');
        hint.className = 'form-hint';
        hint.textContent = 'If no moisture information is provided by the manufacturer, use 10% for dry food.';
        hint.style.display = 'block';
        hint.style.color = '#666';
        hint.style.fontSize = '0.8em';
        hint.style.marginTop = '2px';
        
        // Insert the hint after the label
        liquidLabel.parentNode.insertBefore(hint, liquidInput.nextSibling);
    } else if (foodType === 'wet') {
        // Create a hint element for wet food
        const hint = document.createElement('small');
        hint.className = 'form-hint';
        hint.textContent = 'Wet food typically has 75-85% moisture content. Check the packaging for exact values.';
        hint.style.display = 'block';
        hint.style.color = '#666';
        hint.style.fontSize = '0.8em';
        hint.style.marginTop = '2px';
        
        // Insert the hint after the label
        liquidLabel.parentNode.insertBefore(hint, liquidInput.nextSibling);
    }
    
    const updateCarbs = () => {
        const liquid = parseFloat(liquidInput.value) || 0;
        const protein = parseFloat(proteinInput.value) || 0;
        const fat = parseFloat(fatInput.value) || 0;
        const fibre = parseFloat(fibreInput.value) || 0;
        const ash = parseFloat(ashInput.value) || 0;
        
        const carbs = Math.max(0, 100 - (liquid + protein + fat + fibre + ash));
        carbInput.value = carbs.toFixed(1);
        
        // Calculate calories per gram using Modified Atwater formula
        const caloriesPerGram = (protein/100 * 3.5) + (fat/100 * 8.5) + (carbs/100 * 3.5);
        caloriesPerGramInput.value = caloriesPerGram.toFixed(3);
        
        // Validate total doesn't exceed 100%
        const total = liquid + protein + fat + fibre + ash;
        if (total > 100) {
            alert('The total of all nutritional components cannot exceed 100%.');
        }
    };
    
    // Add event listener to handle food selection
    foodSelection.addEventListener('change', function() {
        const selectedValue = this.value;
        const nameInput = foodForm.querySelector('.food-name');
        
        if (selectedValue === 'custom') {
            // Clear all fields for custom input
            nameInput.value = '';
            nameInput.readOnly = false;
            
            // For dry food, set default moisture to 10%, otherwise clear it
            if (foodType === 'dry') {
                liquidInput.value = '10.0';
            } else {
                liquidInput.value = '';
            }
            
            proteinInput.value = '';
            fatInput.value = '';
            fibreInput.value = '';
            ashInput.value = '';
            carbInput.value = '';
            caloriesPerGramInput.value = '';
            
            // If it's dry food with default moisture, update carbs display
            if (foodType === 'dry') {
                updateCarbs();
            }
        } else {
            // Fill in the values from the predefined food
            const selectedFood = predefinedFoods[parseInt(selectedValue)];
            nameInput.value = selectedFood.name;
            nameInput.readOnly = true; // Make name field read-only for predefined foods
            liquidInput.value = selectedFood.liquidPercent;
            proteinInput.value = selectedFood.proteinPercent;
            fatInput.value = selectedFood.fatPercent;
            fibreInput.value = selectedFood.fibrePercent;
            ashInput.value = selectedFood.ashPercent;
            
            // Trigger the carb calculation and calorie calculation
            updateCarbs();
        }
    });
    
    [liquidInput, proteinInput, fatInput, fibreInput, ashInput].forEach(input => {
        input.addEventListener('input', updateCarbs);
    });
    
    // Add event listener to remove button
    const removeBtn = foodForm.querySelector('.remove-food-btn');
    removeBtn.addEventListener('click', () => {
        if (container.querySelectorAll('.food-form').length > 1) {
            foodForm.remove();
        } else {
            alert('You need at least one food option of each type.');
        }
    });
    
    container.appendChild(foodForm);
}

// Calculation Functions
function calculateResults() {
    // Calculate daily caloric needs
    const dailyCalories = calculateDailyCalories(catData);
    
    // Get distribution from slider (default to 50/50 if not yet on results page)
    const wetPercent = foodDistributionSlider ? parseInt(foodDistributionSlider.value) / 100 : 0.5;
    const dryPercent = 1 - wetPercent;
    
    // Split calories based on distribution
    const dryFoodCalories = dailyCalories * dryPercent;
    const wetFoodCalories = dailyCalories * wetPercent;
    
    // Handle multiple dry foods (up to 2)
    let dryFoodResult;
    if (dryFoods.length === 1) {
        // Single dry food
        const selectedDryFood = dryFoods[0];
        const dryFoodGrams = (dryFoodCalories / selectedDryFood.caloriesPer100g) * 100;
        
        dryFoodResult = {
            foods: [selectedDryFood],
            names: [selectedDryFood.name],
            caloriesPerGram: selectedDryFood.caloriesPerGram,
            grams: Math.round(dryFoodGrams),
            calories: dryFoodCalories.toFixed(1)
        };
    } else if (dryFoods.length === 2) {
        // Two dry foods (50-50 split)
        const dryFood1 = dryFoods[0];
        const dryFood2 = dryFoods[1];
        
        // Calculate average energy density
        const avgCaloriesPerGram = (dryFood1.caloriesPerGram + dryFood2.caloriesPerGram) / 2;
        const avgCaloriesPer100g = avgCaloriesPerGram * 100;
        
        // Calculate total grams needed based on average energy density
        const totalDryFoodGrams = (dryFoodCalories / avgCaloriesPer100g) * 100;
        
        dryFoodResult = {
            foods: [dryFood1, dryFood2],
            names: [dryFood1.name, dryFood2.name],
            caloriesPerGram: avgCaloriesPerGram,
            grams: Math.round(totalDryFoodGrams),
            calories: dryFoodCalories.toFixed(1)
        };
    }
    
    // Handle multiple wet foods (up to 2)
    let wetFoodResult;
    if (wetFoods.length === 1) {
        // Single wet food
        const selectedWetFood = wetFoods[0];
        const wetFoodGrams = (wetFoodCalories / selectedWetFood.caloriesPer100g) * 100;
        
        wetFoodResult = {
            foods: [selectedWetFood],
            names: [selectedWetFood.name],
            caloriesPerGram: selectedWetFood.caloriesPerGram,
            grams: Math.round(wetFoodGrams),
            calories: wetFoodCalories.toFixed(1)
        };
    } else if (wetFoods.length === 2) {
        // Two wet foods (50-50 split)
        const wetFood1 = wetFoods[0];
        const wetFood2 = wetFoods[1];
        
        // Calculate average energy density
        const avgCaloriesPerGram = (wetFood1.caloriesPerGram + wetFood2.caloriesPerGram) / 2;
        const avgCaloriesPer100g = avgCaloriesPerGram * 100;
        
        // Calculate total grams needed based on average energy density
        const totalWetFoodGrams = (wetFoodCalories / avgCaloriesPer100g) * 100;
        
        wetFoodResult = {
            foods: [wetFood1, wetFood2],
            names: [wetFood1.name, wetFood2.name],
            caloriesPerGram: avgCaloriesPerGram,
            grams: Math.round(totalWetFoodGrams),
            calories: wetFoodCalories.toFixed(1)
        };
    }
    
    // Store results for later recalculation
    lastCalculatedResults = {
        dailyCalories,
        dryFoodResult,
        wetFoodResult
    };
    
    // Display results
    displayResults({
        dailyCalories,
        dryFood: dryFoodResult,
        wetFood: wetFoodResult,
        wetPercent: wetPercent * 100,
        dryPercent: dryPercent * 100
    });
}

function calculateDailyCalories(catData) {
    const weight = parseFloat(catData.weight);
    const exponent = 0.67;
    
    // Get base multiplier and age adjustment based on the table
    let baseMultiplier;
    let ageAdjustment = 1.0;
    
    const isNeutered = catData.neuteringStatus === 'neutered';
    
    // Determine base multiplier based on neutering status and activity level
    if (isNeutered) {
        // Neutered cats
        switch (catData.activityLevel) {
            case 'outdoor':
                baseMultiplier = 75;
                break;
            case 'active':
                baseMultiplier = 62.5;
                break;
            case 'sleepy':
                baseMultiplier = 52;
                break;
            default:
                baseMultiplier = 62.5;
        }
    } else {
        // Intact cats
        switch (catData.activityLevel) {
            case 'outdoor':
                baseMultiplier = 100;
                break;
            case 'active':
                baseMultiplier = 90;
                break;
            case 'sleepy':
                baseMultiplier = 85;
                break;
            default:
                baseMultiplier = 90;
        }
    }
    
    // Apply age adjustment
    switch (catData.ageCategory) {
        case 'young-adult':
            // Young Adult (1-7 years): No age adjustment
            ageAdjustment = 1.0;
            break;
        case 'adult':
            // Adult (2-7 years): No age adjustment
            ageAdjustment = 1.0;
            break;
        case 'early-senior':
            // Early Senior (7-11 years) / Mature Adult (7-12 years): 0.95 multiplier
            ageAdjustment = 0.95;
            break;
        case 'senior':
            // Senior (11+ years) / Senior (12+): 1.05 multiplier
            ageAdjustment = 1.05;
            break;
        default:
            ageAdjustment = 1.0;
    }
    
    // Weight status adjustment is still applied separately
    let weightStatusMultiplier = 1.0;
    switch (catData.weightStatus) {
        case 'overweight':
            weightStatusMultiplier = 0.9;
            break;
        case 'underweight':
            weightStatusMultiplier = 1.1;
            break;
        case 'ideal':
        default:
            weightStatusMultiplier = 1.0;
    }
    
    // Calculate base metabolic rate using the formula and apply all adjustments
    const baseMetabolicRate = baseMultiplier * Math.pow(weight, exponent);
    const adjustedCalories = baseMetabolicRate * ageAdjustment * weightStatusMultiplier;
    
    return adjustedCalories;
}

function displayResults(results) {
    // Get the results content element
    const resultsContent = document.getElementById('results-content');
    const catDetails = document.getElementById('cat-details');
    
    if (!resultsContent || !catDetails) {
        console.error('Results content or cat details elements not found');
        return;
    }
    
    // Convert age category to display text
    let ageCategoryText = '';
    switch(catData.ageCategory) {
        case 'young-adult':
            ageCategoryText = 'Young Adult (1-7 years)';
            break;
        case 'early-senior':
            ageCategoryText = 'Mature Adult (7-12 years)';
            break;
        case 'senior':
            ageCategoryText = 'Senior (12+ years)';
            break;
        default:
            ageCategoryText = catData.ageCategory;
    }
    
    // Convert activity level to display text
    let activityLevelText = '';
    switch(catData.activityLevel) {
        case 'sleepy':
            activityLevelText = 'Couch Potato';
            break;
        case 'active':
            activityLevelText = 'Playful Indoor';
            break;
        case 'outdoor':
            activityLevelText = 'Outdoor';
            break;
        default:
            activityLevelText = catData.activityLevel;
    }
    
    // Update slider to match the current distribution (if available)
    if (results.wetPercent !== undefined && foodDistributionSlider) {
        foodDistributionSlider.value = results.wetPercent;
        wetFoodPercentage.textContent = Math.round(results.wetPercent);
        dryFoodPercentage.textContent = Math.round(results.dryPercent);
    }
    
    // Format dry food names
    let dryFoodNamesList = '';
    if (results.dryFood.names.length === 1) {
        dryFoodNamesList = `<p>${results.dryFood.names[0]}</p>`;
    } else {
        dryFoodNamesList = `
            <ul class="food-list">
                <li>${results.dryFood.names[0]}</li>
                <li>${results.dryFood.names[1]}</li>
            </ul>
            <p class="food-mix-note">
                (Mix these foods in a 50-50 ratio)
            </p>
        `;
    }
    
    // Format wet food names
    let wetFoodNamesList = '';
    if (results.wetFood.names.length === 1) {
        wetFoodNamesList = `<p>${results.wetFood.names[0]}</p>`;
    } else {
        wetFoodNamesList = `
            <ul class="food-list">
                <li>${results.wetFood.names[0]}</li>
                <li>${results.wetFood.names[1]}</li>
            </ul>
            <p class="food-mix-note">
                (Mix these foods in a 50-50 ratio)
            </p>
        `;
    }
    
    // Display cat details
    catDetails.innerHTML = `
        <h3>Cat Details</h3>
        <p>Name: ${catData.name}</p>
        <p>Weight: ${catData.weight} kg</p>
        <p>Age: ${ageCategoryText}</p>
        <p>Activity Level: ${activityLevelText}</p>
        <p>Weight Status: ${catData.weightStatus}</p>
        <p>Neutered: ${catData.neuteringStatus === 'neutered' ? 'Yes' : 'No'}</p>
    `;
    
    resultsContent.innerHTML = `
        <div class="result-item">
            <p class="result-title">Daily Caloric Needs:</p>
            <p>${results.dailyCalories.toFixed(1)} calories</p>
        </div>
        <div class="result-item">
            <p class="result-title">Current Distribution:</p>
            <p>Wet Food: ${results.wetPercent ? Math.round(results.wetPercent) : 50}% | Dry Food: ${results.dryPercent ? Math.round(results.dryPercent) : 50}%</p>
        </div>
        
        <div class="food-recommendation">
            <h3>Dry Food Recommendation (${results.dryPercent ? Math.round(results.dryPercent) : 50}%)</h3>
            <div class="result-item">
                <p class="result-title">Foods:</p>
                ${dryFoodNamesList}
            </div>
            <div class="result-item">
                <p class="result-title">Energy Density:</p>
                <p>${results.dryFood.caloriesPerGram.toFixed(3)} kcal/g</p>
            </div>
            <div class="result-item">
                <p class="result-title">Amount:</p>
                <p>${results.dryFood.grams} grams per day (${results.dryFood.calories} calories)</p>
            </div>
        </div>
        
        <div class="food-recommendation">
            <h3>Wet Food Recommendation (${results.wetPercent ? Math.round(results.wetPercent) : 50}%)</h3>
            <div class="result-item">
                <p class="result-title">Foods:</p>
                ${wetFoodNamesList}
            </div>
            <div class="result-item">
                <p class="result-title">Energy Density:</p>
                <p>${results.wetFood.caloriesPerGram.toFixed(3)} kcal/g</p>
            </div>
            <div class="result-item">
                <p class="result-title">Amount:</p>
                <p>${results.wetFood.grams} grams per day (${results.wetFood.calories} calories)</p>
            </div>
        </div>
        
        <div class="result-item">
            <p class="result-title">Feeding Schedule:</p>
            <p>We recommend dividing the daily amount into 2-3 meals per day.</p>
        </div>
        
        <div class="result-item">
            <p class="result-title">Note:</p>
            <p>This is a general recommendation. Always consult with your veterinarian for personalized advice for your cat's specific needs.</p>
        </div>
    `;
}

// Utility Functions
function printResults() {
    window.print();
}

function resetApp() {
    // Reset to first step
    currentActive = 1;
    
    // Clear all form data
    document.getElementById('cat-form').reset();
    
    // Reset food containers
    dryFoodContainer.innerHTML = '';
    wetFoodContainer.innerHTML = '';
    dryFoodCount = 0;
    wetFoodCount = 0;
    
    // Add initial food forms
    addDryFood();
    addWetFood();
    
    // Reset data
    catData = {};
    dryFoods = [];
    wetFoods = [];
    
    // Update UI
    updateUI();
}

// Food Distribution Functions
function updateDistributionDisplay() {
    const wetPercent = foodDistributionSlider.value;
    const dryPercent = 100 - wetPercent;
    
    wetFoodPercentage.textContent = wetPercent;
    dryFoodPercentage.textContent = dryPercent;
    
    // Update slider background gradient
    foodDistributionSlider.style.background = `linear-gradient(to right, #4a90e2 0%, #4a90e2 ${wetPercent}%, #2c3e50 ${wetPercent}%, #2c3e50 100%)`;
    
    // Show recalculate button if value is different from initial (50)
    if (wetPercent !== 50) {
        recalculateBtn.classList.add('visible');
    } else {
        recalculateBtn.classList.remove('visible');
    }
}

function recalculateWithNewDistribution() {
    if (!lastCalculatedResults) return;
    
    const wetPercent = parseInt(foodDistributionSlider.value) / 100;
    const dryPercent = 1 - wetPercent;
    
    // Recalculate with new distribution
    const dailyCalories = lastCalculatedResults.dailyCalories;
    const wetFoodCalories = dailyCalories * wetPercent;
    const dryFoodCalories = dailyCalories * dryPercent;
    
    // Get the stored food results
    const dryFoodResult = lastCalculatedResults.dryFoodResult;
    const wetFoodResult = lastCalculatedResults.wetFoodResult;
    
    // Recalculate amounts based on new distribution
    if (dryFoodResult) {
        const avgCaloriesPer100g = dryFoodResult.caloriesPerGram * 100;
        const newDryFoodGrams = (dryFoodCalories / avgCaloriesPer100g) * 100;
        dryFoodResult.grams = Math.round(newDryFoodGrams);
        dryFoodResult.calories = dryFoodCalories.toFixed(1);
    }
    
    if (wetFoodResult) {
        const avgCaloriesPer100g = wetFoodResult.caloriesPerGram * 100;
        const newWetFoodGrams = (wetFoodCalories / avgCaloriesPer100g) * 100;
        wetFoodResult.grams = Math.round(newWetFoodGrams);
        wetFoodResult.calories = wetFoodCalories.toFixed(1);
    }
    
    // Display updated results
    displayResults({
        dailyCalories,
        dryFood: dryFoodResult,
        wetFood: wetFoodResult,
        wetPercent: wetPercent * 100,
        dryPercent: dryPercent * 100
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', init); 