#!/bin/bash

apt-get update
apt-get upgrade -y
apt-get install -y git
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
usermod -aG docker vagrant
apt install docker-compose -y
dpkg -r --force-depends golang-docker-credential-helpers

service docker status
service docker start

echo "APP_URL=\"http://$ip\"" >> /etc/environment
