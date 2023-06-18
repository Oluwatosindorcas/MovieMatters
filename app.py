""""
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/movie_details.html')
def movie_details():
    return render_template('movie-details.html', movie=movie_details)


if __name__ == '__main__':
    app.run(debug=True) """
