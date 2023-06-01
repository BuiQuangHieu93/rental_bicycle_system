import pymongo
import pandas as pd
import xgboost as xgb

from dotenv import load_dotenv
import os

# Connect to MongoDB and load data into a Pandas DataFrame
load_dotenv()
mongodb_url = os.getenv("MONGODB_URL")
client = pymongo.MongoClient(mongodb_url)
db = client["test"]
collection = db["data"]
data = pd.DataFrame(list(collection.find({}, {'_id': 0})))


# Preprocess the data
data = data.dropna()
X = data[['temperature', 'humidity', 'windSpeed', 'hour']]
y = data['rented']

# Train an XGBoost model
dtrain = xgb.DMatrix(X, label=y)
params = {'max_depth': 3, 'eta': 0.1,
          'silent': 1, 'objective': 'reg:squarederror'}
num_rounds = 10
model = xgb.train(params, dtrain, num_rounds)

# Save the trained model to file
model.save_model('model.bin')
