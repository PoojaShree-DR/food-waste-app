from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle  # For loading ML models
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

# Load your ML model (Example: A trained Scikit-learn model)
model = python.load(open("Untitled7.ipynb", "rb"))

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    features = np.array(data["features"]).reshape(1, -1)  # Assuming input is a list
    prediction = model.predict(features)
    return jsonify({"prediction": prediction.tolist()})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
