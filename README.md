# nodejsapp
# Dependancy OS environment variable DBUSER
# docker run command 
 docker build -t <image_name>:<version> .
 docker run -e DBUSER=<dbuser> -d -p 3000:3000 <image_name>:<version> 
