@echo off
title kServer setup
cls
echo.
echo    ��������������������������������������������������������������������
echo.
echo                    Please wait... kServer flushing now...
echo.
echo    ��������������������������������������������������������������������
echo.
del "server\lib\web\lib\in_game_kkutu.js"
rmdir /s /q "./server/node_modules"
rmdir /s /q "./server/lib/node_modules"
rmdir /s /q "./server/lib/etc"
