# ChessDataStudy
<div>
  A unique chess database interface that showcases
  games played on the professional level. Integrates embedded chess
  analysis boards leveraging the Lichess API. A detail view showcasing
  selected games with greater spotlight. Utilizes the
  DjangoRestFramework to transform the Django database into Angular
  accessible JSON format.
</div>

<h2> To locally host this website: </h3>
<h3>
  This project is written using Angular CLI version 1.49 and Django version 1.11, so it is recommended to download these versions. 
<h3> 
<h5>
  In the client directory, type:
<h5>
<h5>
  npm install -g @angular/cli@latest 
</h5>
<h5>
  npm install
</h5>
<h5>
  to create the Angular application. 
</h5>
<h5>
  Once this is done, cd into src of the backend directory, and then type:
</h5>
<h5>
  django manage.py makemigrations
</h5>
<h5>
  django manage.py migrate
</h5>
<h5>
  django manage.py createsuperuser (provide information to create an admin user)
</h5>
<h5>
  django managepy runserver
</h5>
<h5>
  The project can now be viewed in http://127.0.0.1:8000/. 
</h5>


  To modify or update the client and show changes, in the client directory type:
ng build --prod --output-path "path to a file called ang inside the static folder of the backend" --watch --output-hash none


