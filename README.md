
# ChessDataStudy Angular2 + Django

A unique chess database interface that showcases
  games played on the professional level, with full server side search functionality. Integrates embedded chess
  analysis boards leveraging the Lichess API. A detail view showcasing
  selected games with greater spotlight. Utilizes the
  DjangoRestFramework to transform the Django database into Angular
  accessible JSON format.

## Getting Started
Clone or download the repository
Install Angular CLI version 1.49 and Django version 1.11


### Installing

Open the folder in a terminal window
```
npm install -g @angular/cli@latest 
npm install 
cd client
npm install
ng build --prod --output-path "path to a file called ang inside the static folder of the backend" --watch --output-hash none
```

And repeat

```
cd backend
cd src 
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser (provide user information)
python manage.py runserver
```


## Built With

* [Django](https://www.djangoproject.com/) - The back-end web framework used
* [Angular2](https://angular.io/docs) - The front-end web framework used
* [Bootstrap](http://getbootstrap.com/docs/4.0/getting-started/introduction/) - Framework for creating responsive layouts


## Authors

* **Sam Lee** - *Personal projectk* - [Sammyuel](https://github.com/Sammyuel)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


