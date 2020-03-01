#!/bin/bash

### Build the images needed
docker build -t php-fpm:latest /var/www/app/docker/php-fpm/
#docker build -t php-fpm-xdebug:latest /var/www/app/docker/php-fpm-xdebug/
docker-compose -f /var/www/app/docker/docker-compose.yml build

cd /var/www/app

### Init new laravel app if it's not initialized yet
if [ ! -d "/var/www/app/code" ]; then
    docker run --volume /var/www/app:/app --env-file=/var/www/app/docker/local.env composer:latest composer create-project --prefer-dist laravel/laravel code
fi

### Clear the .env file
echo > /var/www/app/code/.env

### Install composer dependencies
docker run --volume /var/www/app/code:/app --env-file=/var/www/app/docker/local.env composer:latest composer install

docker-compose -f /var/www/app/docker/docker-compose.yml up -d
echo "Wait for 30 seconds to let mysql container startup"
sleep 30

### Do migrations & seeding
docker run --volume /var/www/app/code/:/var/app/ --env-file=/var/www/app/docker/local.env --network=docker_application php-fpm:latest php /var/app/artisan migrate:fresh --seed

### Keygen and cache the config
docker run --volume /var/www/app/code/:/var/app/ --env-file=/var/www/app/docker/local.env --network=docker_application php-fpm:latest php /var/app/artisan key:generate
docker run --volume /var/www/app/code/:/var/app/ --env-file=/var/www/app/docker/local.env --network=docker_application php-fpm:latest php /var/app/artisan config:cache


#docker-compose -f /var/www/app/docker/docker-compose.yml down

