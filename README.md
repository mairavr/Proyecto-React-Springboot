# Proyecto-React-Springboot
Instrucciones para la configuración y ejecución del proyecto

1. Iniciar XAMPP:
Antes de comenzar, asegúrate de tener XAMPP instalado y en ejecución. Abre el panel de control de XAMPP y activa los servicios de Apache y MySQL.
Esto es fundamental para que el sistema pueda conectarse correctamente a la base de datos local.

2. Creación del esquema en MySQL:
Una vez que MySQL esté activo, accede a phpMyAdmin o utiliza tu cliente de base de datos preferido para crear un nuevo esquema con el nombre base.
Este esquema será utilizado por el backend para almacenar y gestionar la información de la aplicación.

3. Verificación de las tablas:
Revisa si las tablas necesarias ya están creadas y pobladas en el esquema. Si no es así, deberás ejecutar el script SQL correspondiente para generar la estructura y los datos iniciales.
Esto garantiza que la aplicación cuente con la información mínima necesaria para funcionar correctamente.

4. Ejecución del backend (Spring Boot):
Abre el proyecto backend en Visual Studio Code (VS Code) o en tu entorno de desarrollo preferido.
Asegúrate de que las dependencias estén correctamente instaladas y luego inicia el servidor de Spring Boot.
Una vez ejecutado, el backend debería conectarse automáticamente a la base de datos “base” que configuraste en el paso anterior.

5. Ejecución del frontend (React):
Finalmente, abre una terminal en la carpeta del proyecto React y ejecuta el siguiente comando:

npm run dev

Este comando iniciará el servidor de desarrollo de React.
Una vez en funcionamiento, podrás visualizar la aplicación desde tu navegador web, usualmente en la dirección:
http://localhost:5173/
 (o el puerto que se indique en la terminal).
