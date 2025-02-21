 
  const addFood = async () => {
    if (newFood.name && newFood.expiry) {
      const response = await fetch("http://localhost:5000/api/expiring-food", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFood),
      });
      const data = await response.json();
      setExpiringFood([...expiringFood, data]);
    }
  };
  
  const removeFood = async (id) => {
    await fetch(`http://localhost:5000/api/expiring-food/${id}`, { method: "DELETE" });
    setExpiringFood(expiringFood.filter((food) => food.id !== id));
  };
  const API_URL = "https://your-backend-url.onrender.com/api";

const fetchFood = async () => {
  const response = await fetch(`${API_URL}/expiring-food`);
  const data = await response.json();
  setExpiringFood(data);
};
const addFoodItem = async () => {
    const newFood = { name: "Apple", expiry: "2025-02-25" };
  
    try {
      const response = await fetch("http://localhost:5000/api/expiring-food", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFood),
      });
  
      if (!response.ok) throw new Error("Failed to save");
  
      const data = await response.json();
      setExpiringFood([...expiringFood, data]); // Update UI
    } catch (error) {
      console.error("Error saving food:", error);
    }
  };
  
