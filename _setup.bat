@echo off
title kServer setup
cls
echo.
echo    收收收收收收收收收收收收收收收收收收收收收收收收收收收收收收收收收收
echo.
echo                     Please wait... kServer setting now...
echo.
echo    收收收收收收收收收收收收收收收收收收收收收收收收收收收收收收收收收收
echo.
cd ./server
node setup
cd ./lib
grunt default pack
