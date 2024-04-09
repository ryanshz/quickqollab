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

echo "Activating virtual environment..."
if [[ "$OSTYPE" == "win32" ]] || [[ "$OSTYPE" == "msys" ]]; then
    source ./api/venv/Scripts/activate
else
    source ./api/venv/bin/activate
fi

if [ $? -ne 0 ]; then
    echo
    echo "ERROR DETECTED"
    echo "Virtual environment not detected. Run setup.sh to create."
else
    echo "Starting the project..."
    npm start
fi
