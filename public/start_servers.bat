@echo off

cd /d C:\xampp\store-inventory-management-system
start /B cmd /C "php artisan serve"
start /B cmd /C "npm run watch"
