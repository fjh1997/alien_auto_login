在https://na.alienwarearena.com/上面連續登錄28天有Arp獎勵，但每天登錄又比較麻煩，恰好手上有一個閒著的linux服務器，索性寫個腳本自動登錄。
首先安裝nodeJS以及帶chromium的puppeteer
```bash
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt-get install -y nodejs # 安裝nodejs
npm i  puppeteer  # 安裝puppeteer 這個因為要安裝chromium，時間比較長，可以借助美區梯子安裝方法如下：
# npm config set proxy http://127.0.0.1:8118 
# npm config set https-proxy http://127.0.0.1:8118 
```

然後下载该腳本命名為alien_login.js
```bash

```
之後直接測試
```bash
node alien_login.js
```
如果提示登錄成功就可以了
之後可以在crontab裡面添加計劃任務，格式為 分 時 日 月 周幾 命令
```bash
#保存當前的crontab到mycron文件
crontab -l > mycron
#把新命令添加到mycron
echo "0 0 * * *  node ~/alien_login.js" >> mycron
#安裝新的cron文件
crontab mycron
```