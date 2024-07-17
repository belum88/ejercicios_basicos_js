const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];


const modifiedSchedule = [];


for (let i = 0; i < foodSchedule.length; i++) {
  const item = foodSchedule[i];

  if (item.isVegan) {
   
    modifiedSchedule.push(item);
  } else {
   
    let found = false;
    for (const fruit of fruits) {
  
      if (!modifiedSchedule.some(el => el.name === fruit)) {
        modifiedSchedule.push({ name: fruit, isVegan: true });
        found = true;
        break;
      }
    }

  
    if (!found) {
      modifiedSchedule.push(item);
    }
  }
}

console.log(modifiedSchedule);
