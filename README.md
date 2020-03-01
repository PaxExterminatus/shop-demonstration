# Services

- `[ip]:80` PHP application
- `[ip]:8080` PhpMyAdmin
- `[ip]:1080` MailDev web interface to check caught emails

Since composer runs in a separate container and some packages require PHP extensions which this container doen't have you should:

- Run `composer require` with `--ignore-platform-reqs`
- Make sure that required extensions added to `./docker/php-fpm/Dockerfile`

# Additional setup

- To set working directory to `/var/www/app` after `vagrant ssh` command:  
    Add line `cd /var/www/app` to the file `/home/vagrant/.bashrc`  

- To use `artisan` command after `vagrant ssh`:  
    Add line `alias artisan='docker-compose -f /var/www/app/docker/docker-compose.yml exec php /var/app/artisan'` to the file `/home/vagrant/.bashrc`

- To use `composer` command:  
    Add line `alias composer='docker run --volume /var/www/app/code:/app --env-file=/var/www/app/docker/local.env composer:latest composer'` to the file `/home/vagrant/.bashrc`

#SSH

cd /var/www/app


# Laravel Command

- Migrations

docker run --volume /var/www/app/code/:/var/app/ --env-file=/var/www/app/docker/local.env --network=docker_application php-fpm:latest php /var/app/artisan migrate:refresh --seed

- Drop All Tables & Migrate

docker run --volume /var/www/app/code/:/var/app/ --env-file=/var/www/app/docker/local.env --network=docker_application php-fpm:latest php /var/app/artisan migrate:fresh --seed

- Create the symbolic link

docker run --volume /var/www/app/code/:/var/app/ --env-file=/var/www/app/docker/local.env --network=docker_application php-fpm:latest php /var/app/artisan storage:link
    
#NPM

- code/package.json


    "dev": "npm run development",
    "development": "node node_modules/cross-env/dist/bin/cross-env.js NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "watch": "npm run development -- --watch",
    "watch-poll": "npm run watch -- --watch-poll",
    "hot": "node node_modules/cross-env/dist/bin/cross-env.js NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
    "prod": "npm run production",
    "production": "node node_modules/cross-env/dist/bin/cross-env.js NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"

#Shared on web

    ngrok http 192.168.33.100:80