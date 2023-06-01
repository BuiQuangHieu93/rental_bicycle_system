import sys
import json
import numpy as np
import xgboost as xgb

# Load the model from file
model = xgb.Booster()
model.load_model('../server/python/model.bin')

# Parse the input data
forecastData = json.loads(sys.argv[1])
forecastDataArray = np.array(forecastData, dtype=np.float32)
x_test = xgb.DMatrix(forecastDataArray)

# Predict the output using the model and input data
y_pred = model.predict(x_test)

# Convert the predictions to a list
result = y_pred.tolist()

# Print the output to stdout
print(json.dumps(result))
