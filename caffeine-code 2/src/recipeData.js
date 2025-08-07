const recipes = {
  Arabica: {
    "French Press": {
      grindSize: "Medium-coarse",
      waterTemp: "93°C",
      brewTime: "4 minutes",
      instructions: [
        "Heat water to 93°C.",
        "Add 20g coffee grounds.",
        "Pour 60g water and stir. Wait 30 seconds.",
        "Slowly pour remaining 240g water.",
        "Place lid and steep for 4 minutes.",
        "Press down plunger and serve.",
        "Enjoy!"
      ]
    },
    "Pour Over": {
      grindSize: "Medium-fine",
      waterTemp: "94°C",
      brewTime: "2:45–3:30 minutes",
      instructions: [
        "Heat water to 94°C.",
        "Rinse filter and add 16g coffee grounds.",
        "Pour 32g water (bloom), wait 30s.",
        "Pour to 100g, wait 30s.",
        "Pour remaining water to reach 256g.",
        "Let drain fully.",
        "Enjoy!"
      ]
    },
    "Espresso": {
      grindSize: "Very fine",
      waterTemp: "93°C",
      brewTime: "25–30 seconds",
      instructions: [
        "Grind 18g coffee very fine.",
        "Tamp firmly into portafilter.",
        "Brew at 9 bars pressure.",
        "Extract 36g espresso in 27s.",
        "Stir and enjoy."
      ]
    },
    "Cold Brew": {
      grindSize: "Coarse",
      waterTemp: "Room Temp(20°C–25°C)/Cold",
      brewTime: "16 hours",
      instructions: [
        "Add 60g coarse Arabica coffee to a jar.",
        "Pour 500g cold/room temp water.",
        "Stir and cover.",
        "Let steep 16 hours.",
        "Strain and dilute 1:1.",
        "Serve over ice and enjoy!"
      ]
    }
  },
  Robusta: {
    "French Press": {
      grindSize: "Medium",
      waterTemp: "95°C",
      brewTime: "3–3.5 minutes",
      instructions: [
        "Heat water to 95°C.",
        "Add 18g Robusta coffee grounds.",
        "Pour 90g water, wait 30 seconds.",
        "Add remaining 180g water.",
        "Let steep for 3–3.5 minutes.",
        "Stir and plunge slowly.",
        "Enjoy!"
      ]
    },
    "Pour Over": {
      grindSize: "Medium",
      waterTemp: "96°C",
      brewTime: "2:30–3:00 minutes",
      instructions: [
        "Heat water to 96°C.",
        "Add 14g coffee to filter.",
        "Pour 30g water (bloom), wait 25s.",
        "Slowly pour to 220g total.",
        "Let water draw down.",
        "Enjoy your strong, bold brew!"
      ]
    },
    "Espresso": {
      grindSize: "Very fine",
      waterTemp: "94°C",
      brewTime: "25–28 seconds",
      instructions: [
        "Use 17g Robusta ground coffee.",
        "Tamp and level evenly.",
        "Brew 34g shot in ~26s.",
        "Taste: extra crema and bold.",
        "Enjoy!"
      ]
    },
    "Cold Brew": {
      grindSize: "Coarse",
      waterTemp: "Room Temp(20°C–25°C)",
      brewTime: "14–15 hours",
      instructions: [
        "Combine 50g ground Robusta and 400g water.",
        "Stir to mix evenly.",
        "Steep 14–15 hours.",
        "Filter through fine mesh.",
        "Serve over ice or with milk.",
        "Enjoy bold, earthy brew!"
      ]
    }
  }
};

export default recipes;
