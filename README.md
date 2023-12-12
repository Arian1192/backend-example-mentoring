

> [!IMPORTANT]
>
> Clonamos el repo y accedemos a la carpeta, instalamos las dependencias con:
>
> npm i
> una vez hemos instalado las dependencias levantamos docker para la imagen de redis ( ni caso a esto )
> solo ejecutar antes de levantar el backend: 
> sudo docker-compose up -d
> Una vez lenvantado docker, crearemos un fichero .env en la raiz del proyecto con la variable de entorno que os pasare por slack
> y entonces ya podremos levantar el backend con :
> npm run start
