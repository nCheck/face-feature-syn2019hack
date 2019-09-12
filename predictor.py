import flask
import os
from flask import jsonify, request
from flask import flash, redirect, url_for, session
from werkzeug.utils import secure_filename
# from flask_cors import CORS, cross_origin
import requests, json
import pandas as pd

import numpy as np
import cv2    
from sklearn.metrics import f1_score

from IPython.core.display import display, HTML
from PIL import Image
from io import BytesIO
import base64
#lets start fastai
from fastai.vision import *

path = './'
learn = load_learner(path)

app = flask.Flask(__name__)
app.config["DEBUG"] = True
app.secret_key = 'super secret key'
# cors = CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/predict', methods=['POST'])
def predict():
    # print( json.dumps( request.json['data'] ) )

    data = request.form 
    folder_name = data['folder_name']
    image_name = data['image_name']

    path = './public/data/'+folder_name+'/'+image_name


    preds = str(learn.predict(open_image(path))[0])


    return preds


@app.route('/test', methods=['GET'])
def test():
    # print( json.dumps( request.json['data'] ) )

    # data = request.json['data'] 
    print("Hello World")

    return jsonify( { "stroke" : "done" } )






app.run(host='0.0.0.0',port=5000)