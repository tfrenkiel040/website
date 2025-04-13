# Cat Food Calculator

A web-based tool to help cat owners determine the optimal amount of food for their cats based on specific needs and nutritional information.

## Features

- **Cat Information Collection**: Input your cat's name, neutering status, weight status, activity level, age category, and current weight.
- **Food Information Management**: Add multiple dry and wet food options with detailed nutritional breakdowns.
- **Automatic Calculations**: 
  - Calculates carbohydrate content (NFE) automatically based on other nutritional values.
  - Determines daily caloric needs based on cat's characteristics.
  - Recommends portion sizes for a balanced diet with adjustable wet/dry food distribution.
- **Customizable Food Distribution**: Adjust the percentage of wet and dry food in your cat's diet using an interactive slider.
- **User-Friendly Interface**: Step-by-step process with a progress indicator.
- **Print Functionality**: Print your feeding recommendations for easy reference.

## How to Use

1. **Welcome Screen**: Click "Get Started" to begin.
2. **Cat Information**: Enter details about your cat.
3. **Food Information**: Add at least one dry food and one wet food option with their nutritional information.
4. **Results**: View the calculated feeding recommendations and adjust the wet/dry food distribution as desired.

## Nutritional Information

The calculator requires the following nutritional information for each food:
- Liquid %
- Protein %
- Fat %
- Fibre %
- Ash %

The carbohydrate content (NFE - Nitrogen Free Extract) is automatically calculated by subtracting the sum of the above percentages from 100%.

## Calorie Calculation

The daily caloric needs are calculated based on a comprehensive formula that accounts for multiple factors:

1. **Base calculation**: Uses different multipliers based on neutering status and activity level:
   - **Intact cats**:
     - Outdoor cat: 100 × (weight in kg)^0.67
     - Playful indoor cat: 90 × (weight in kg)^0.67
     - Couch potato: 85 × (weight in kg)^0.67
   - **Neutered/Spayed cats**:
     - Outdoor cat: 75 × (weight in kg)^0.67
     - Playful indoor cat: 62.5 × (weight in kg)^0.67
     - Couch potato: 52 × (weight in kg)^0.67

2. **Age adjustment**:
   - Young Adult (1-7 years): × 1.0 (no adjustment)
   - Mature Adult (7-12 years): × 0.95 (slightly reduced needs)
   - Senior (12+ years): × 1.05 (slightly increased needs)

3. **Weight status adjustment**:
   - Overweight: × 0.9 (for weight loss)
   - Underweight: × 1.1 (for weight gain)
   - Ideal weight: × 1.0 (for maintenance)

This formula is based on research into feline energy requirements and provides more accurate feeding recommendations than simplified calculations.

## Food Energy Calculation

The caloric content (metabolizable energy) of each food is calculated in two steps:

1. **NFE (Nitrogen Free Extract) Calculation**:
   - NFE represents the carbohydrate content
   - Formula: NFE% = 100% - (Moisture% + Protein% + Fat% + Fibre% + Ash%)
   - Example: If a dry food has 10% moisture, 30% protein, 15% fat, 3% fibre, and 7% ash:
     - NFE = 100 - (10 + 30 + 15 + 3 + 7) = 35%

2. **Energy Density Calculation**:
   Using the Modified Atwater factors for pet foods:
   - Protein: 3.5 kcal/g
   - Fat: 8.5 kcal/g
   - NFE (carbohydrates): 3.5 kcal/g

   Complete formula:
   ```
   Energy (kcal/100g) = (Protein% × 3.5) + (Fat% × 8.5) + (NFE% × 3.5)
   ```

   Example calculation for the dry food above:
   - Protein contribution: 30% × 3.5 = 105 kcal
   - Fat contribution: 15% × 8.5 = 127.5 kcal
   - NFE contribution: 35% × 3.5 = 122.5 kcal
   - Total: 355 kcal/100g or 3.55 kcal/g

**Why Modified Atwater Factors?**
- Standard Atwater factors (4/9/4) are based on human food digestibility
- Modified factors (3.5/8.5/3.5) account for:
  - Lower digestibility of pet foods
  - Different processing methods
  - Varying ingredient quality
- These factors are recommended by AAFCO (Association of American Feed Control Officials) and FEDIAF for pet food calculations

The calculator automatically performs these calculations when nutritional information is entered, providing accurate energy density values for portion calculations.

## Food Distribution

By default, the calculator recommends a 50/50 split between wet and dry food. However, you can adjust this distribution using the slider on the results page:
- Move the slider left for more wet food (up to 100% wet food)
- Move the slider right for more dry food (up to 100% dry food)
- Click "Recalculate" to update the feeding recommendations based on your preferred distribution

## Important Note

This calculator is designed for adult cats only. For kittens (under 1 year old), please consult with your veterinarian for appropriate feeding recommendations.

The calculator uses the following age categories:
- Young Adult (1-7 years)
- Mature Adult (7-12 years)
- Senior (12+ years)

And the following activity levels:
- Couch Potato - very low activity
- Playful Indoor - moderate activity
- Outdoor - high activity

## Disclaimer

This tool provides general recommendations and is not a substitute for professional veterinary advice. Always consult with your veterinarian for personalized feeding recommendations for your cat.

## Technical Information

This application is built with:
- HTML5
- CSS3
- JavaScript (ES6+)

No external libraries or frameworks are required.

## Running the Application

Simply open the `index.html` file in a web browser to use the application.

## License

This project is open source and available for personal and educational use. 