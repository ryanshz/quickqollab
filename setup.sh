cat << "EOF"
                     /$$           /$$                           /$$ /$$           /$$      
                    |__/          | $$                          | $$| $$          | $$      
  /$$$$$$  /$$   /$$ /$$  /$$$$$$$| $$   /$$  /$$$$$$   /$$$$$$ | $$| $$  /$$$$$$ | $$$$$$$ 
 /$$__  $$| $$  | $$| $$ /$$_____/| $$  /$$/ /$$__  $$ /$$__  $$| $$| $$ |____  $$| $$__  $$
| $$  \ $$| $$  | $$| $$| $$      | $$$$$$/ | $$  \ $$| $$  \ $$| $$| $$  /$$$$$$$| $$  \ $$
| $$  | $$| $$  | $$| $$| $$      | $$_  $$ | $$  | $$| $$  | $$| $$| $$ /$$__  $$| $$  | $$
|  $$$$$$$|  $$$$$$/| $$|  $$$$$$$| $$ \  $$|  $$$$$$$|  $$$$$$/| $$| $$|  $$$$$$$| $$$$$$$/
 \____  $$ \______/ |__/ \_______/|__/  \__/ \____  $$ \______/ |__/|__/ \_______/|_______/ 
      | $$                                        | $$                                      
      | $$                                        | $$                                      
      |__/                                        |__/                                      
EOF

echo "Creating new virtual environment..."
python -m venv api/venv

# Detect the operating system to determine how to activate the virtual environment
echo "Activating new virtual environment..."
if [[ "$OSTYPE" == "win32" ]] || [[ "$OSTYPE" == "msys" ]]; then
    # Windows or Git Bash on Windows
    source ./api/venv/Scripts/activate
else
    # Assuming Linux/Mac
    source ./api/venv/bin/activate
fi

echo "Installing NPM packages..."
npm install package.json

echo "Installing PIP dependencies..."
pip install -r ./api/requirements.txt

echo "No issues detected."
echo "Successful setup and installation."

echo "Starting the project..."
npm start