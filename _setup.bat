@echo off
title kServer setup
cls
echo.
echo    ��������������������������������������������������������������������
echo.
echo                     Please wait... kServer setting now...
echo.
echo    ��������������������������������������������������������������������
echo.
cd ./server
node setup
cd ./lib
grunt default pack
