#!/usr/bin/env bash
echo "Installing nvm"
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

echo "Installing nodejs"
nvm install lts/carbon
nvm alias default lts/carbon

echo "Installing pm2"
npm install pm2 -g

echo "Installing app"
mkdir -p /home/ubuntu
mv /tmp/bundle.tgz /home/ubuntu
cd /home/ubuntu
tar -xzf bundle.tgz
cd package
npm install --production

echo "Starting app"
NODE_ENV=production pm2 start ./app/bin/www

echo "Daemonizing app"
pm2 startup