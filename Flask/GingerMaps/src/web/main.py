from flask import Flask, render_template , url_for
app = Flask(__name__)


@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('index.html')

@app.route('/map')
def map():
    return render_template('index.html')

@app.route('/todo')
def todo():
    return render_template('index.html')

@app.route('/test')
def test():
    return 'Flask is woring'




if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=5000)
