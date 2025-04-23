function analyzeHealth() {
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);
    const systolic = parseFloat(document.getElementById('systolic').value);
    const diastolic = parseFloat(document.getElementById('diastolic').value);
    const heartRate = parseFloat(document.getElementById('heartrate').value);
  
    let result = '';
    let tips = '';
  
    if (height > 0 && weight > 0) {
      const bmi = weight / (height * height);
      result += ` BMI: ${bmi.toFixed(2)}\n`;
  
      if (bmi < 18.5) {
        result += "Category: Underweight\n";
        tips += "🍽️ Eat protein-rich & calorie-dense foods (eggs, peanut butter, avocados).\n";
        tips += "🏋️ Light weight training & yoga to build strength.\n";
        tips += "🧘 Meditate for stress management & sleep better.\n";
      } else if (22.8 < bmi < 24.9) {
        result += "Category: Normal weight ✅\n";
        tips += "🥗 Maintain a balanced diet: veggies, fruits, whole grains.\n";
        tips += "🏃‍♂️ Keep doing regular cardio or yoga 3-5x per week.\n";
        tips += "💧 Stay hydrated & get 7-8 hrs of sleep.\n";
      } else if (bmi > 28) {
        result += "Category: overweight ⚠️\n";
        tips += "🥦 Eat high-fiber foods: oats, spinach, legumes.\n";
        tips += "🚶 Brisk walk 30 mins daily. Try bodyweight workouts.\n";
        tips += "📵 Reduce sugary foods & screen time before bed.\n";
      } else {
        result += "Category: Obese 🚨\n";
        tips += "🍲 Follow portion control & eat home-cooked meals.\n";
        tips += "🚴 Try low-impact activities: cycling, swimming.\n";
        tips += "🩺 Talk to a nutritionist for a long-term health plan.\n";
      }
    }
  
    if (systolic && diastolic) {
      result += `\n Blood Pressure: ${systolic}/${diastolic} mmHg\n`;
  
      if (systolic < 90 || diastolic < 60) {
        tips += "⚠️ Low BP: Eat salty snacks, drink more water, avoid alcohol.\n";
      } else if (systolic > 140 || diastolic > 90) {
        tips += "⚠️ High BP: Avoid salt, caffeine, and reduce stress.\n";
        tips += "🥬 Eat bananas, beets, garlic. Practice breathing exercises.\n";
      } else {
        tips += "✅ BP is in normal range. Keep up your healthy lifestyle.\n";
      }
    }
  
    if (heartRate) {
      result += `\n Heart Rate: ${heartRate} bpm\n`;
  
      if (heartRate < 60) {
        tips += "⚠️ Low HR: Add light cardio to your routine. Check B12 & thyroid levels.\n";
      } else if (heartRate > 100) {
        tips += "⚠️ High HR: Practice meditation & cut down caffeine.\n";
        tips += "🌰 Try magnesium-rich foods: nuts, seeds, leafy greens.\n";
      } else {
        tips += "✅ Heart rate is normal. Great job!\n";
      }
    }
  
    result += "\n🧠 Mental Health Tip: Take 5-minute breaks. Breathe. Hydrate. You got this! \n";
  
    document.getElementById('result').innerText = result;
    document.getElementById('tips').innerText = tips;
  }
  