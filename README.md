# ChessDataStudy

A unique chess database interface that showcases
games played on the professional level. Integrates embedded chess
analysis boards leveraging the Lichess API. A detail view showcasing
selected games with greater spotlight. Utilizes the
DjangoRestFramework to transform the Django database into Angular
accessible JSON format.

To locally host this website:
This project is written using Angular CLI version 1.49 and Django version 1.11, so it is recommended to download these versions. 
In the client directory, type:
npm install -g @angular/cli@latest 
npm install 
to create the Angular application. 

Once this is done, cd into src of the backend directory, and then type:
django manage.py makemigrations
django manage.py migrate
django manage.py createsuperuser (provide information to create an admin user)
django managepy runserver

The project can now be viewed in http://127.0.0.1:8000/. 

To modify or update the client and show changes, in the client directory type:
ng build --prod --output-path "path to a file called ang inside the static folder of the backend" --watch --output-hash none


