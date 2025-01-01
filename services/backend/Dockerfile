# Use the official PHP image with Apache
FROM php:apache

# Enable the PHP extensions you need (e.g., mysqli for MySQL)
RUN docker-php-ext-install mysqli

# Enable mod_rewrite for Apache
RUN a2enmod rewrite
