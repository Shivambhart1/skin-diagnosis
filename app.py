from flask import Flask, request, send_from_directory, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
from models.runModel import prepareImage, getDiseaseNameFromPrediction

app = Flask(__name__, static_url_path='', static_folder='static')
CORS(app)

prediction = None


#loading the model
model = tf.keras.models.load_model('models/Skin_disease.h5')

@app.route("/", methods=['GET'])
def index():
    return send_from_directory('static','index.html')


@app.route("/api/upload", methods=['POST'])
def upload_file():
    imageFile = request.files['file']
    imagePath = "./uploads/" + imageFile.filename
    imageFile.save('uploads/' + imageFile.filename)

    preparedImage = prepareImage(imagePath)
    prediction = getDiseaseNameFromPrediction(model.predict(preparedImage).tolist()[0])

    print(prediction)

    return prediction
    

    
if __name__ == "__main__":
    app.run(debug=True)
