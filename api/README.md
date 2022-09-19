# Tomato Disease Classification API

## Deployment Guide

### 1. Add Saved Model
```

Create a directory named "models" and add the saved model into it.
```

### 2. Create Virtual Environment
```
pip install virtualenv
py -m venv env
```

### 3. Activate Virtual Environemnt

#### Example (For Windows CMD)
```
env\Scripts\activate.bat
```

#### Example (For Windows Powershell)
```
env\Scripts\Activate.psl
```

#### Example (For MAC)
```
source env\bin\activate
```

### 4. Install the dependencies
```
pip install -r requirements.txt
```

### 5. Run the Server
```
uvicorn main:app --reload --host 0.0.0.0
```
