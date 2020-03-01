#!/bin/bash
echo "Выберите редатор для запуска:"
echo "0. Get information"
echo "1. php artisan migrate:fresh --seed"
echo "2. php artisan migrate:refresh --seed"
echo "3. php artisan storage:link"
echo "4. Laravel IDE Helper - phpDoc generation"
echo "5. Laravel Reset"
read doing

case ${doing} in
0)
docker run --volume /var/www/app/code/:/var/app/ --env-file=/var/www/app/docker/local.env --network=docker_application php-fpm:latest php -v
docker run --volume /var/www/app/code/:/var/app/ --env-file=/var/www/app/docker/local.env --network=docker_application php-fpm:latest php /var/app/artisan --version
;;
1)
docker run --volume /var/www/app/code/:/var/app/ --env-file=/var/www/app/docker/local.env --network=docker_application php-fpm:latest php /var/app/artisan migrate:fresh --seed
;;
2)
docker run --volume /var/www/app/code/:/var/app/ --env-file=/var/www/app/docker/local.env --network=docker_application php-fpm:latest php /var/app/artisan migrate:refresh --seed
;;
3)
docker run --volume /var/www/app/code/:/var/app/ --env-file=/var/www/app/docker/local.env --network=docker_application php-fpm:latest php /var/app/artisan storage:link
;;
4)
docker run --volume /var/www/app/code/:/var/app/ --env-file=/var/www/app/docker/local.env --network=docker_application php-fpm:latest php /var/app/artisan clear-compiled
docker run --volume /var/www/app/code/:/var/app/ --env-file=/var/www/app/docker/local.env --network=docker_application php-fpm:latest php /var/app/artisan ide-helper:generate
docker run --volume /var/www/app/code/:/var/app/ --env-file=/var/www/app/docker/local.env --network=docker_application php-fpm:latest php /var/app/artisan ide-helper:models --dir="app" -W
docker run --volume /var/www/app/code/:/var/app/ --env-file=/var/www/app/docker/local.env --network=docker_application php-fpm:latest php /var/app/artisan ide-helper:meta
;;
5)
#docker run --volume /var/www/app/code/:/var/app/ --env-file=/var/www/app/docker/local.env --network=docker_application php-fpm:latest php /var/app/artisan optimize
docker run --volume /var/www/app/code/:/var/app/ --env-file=/var/www/app/docker/local.env --network=docker_application php-fpm:latest php /var/app/artisan config:clear
;;
*)
echo ${doing} 'command is not correct'
esac