# grupo_xx
<!-- Para crear un nuevo projecto de React Native CLI MAC OS -->
https://reactnative.dev/docs/environment-setup?guide=native&platform=ios
# Importante
    Tener Node 18+
    Tener Watchman 
    Tener Brew
    Aseggurar que no esta instalado React CLI Comunity -  
        npm uninstall -g react-native-cli @react-native-community/cli
    
    Ejecutar npx react-native@latest init NombreDelProyecto

# Si no instala POD's con el iniciador (npx react-native@latest init AwesomeProject) o problemas con IOS

 > ejecutar 
 sudo gem install cocoapods
 despues:
 export NVM_DIR="$HOME/.nvm" 
 [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

> cambiar directorio a ios (cd ios)
 ejecutar pod install

> volver al directorios principal (cd ..)

> abrir la carpeta que contiene .xcodeproj
abrir .xcodeproj en xcode (NO OBLIGATORIO)

ejecutar
npm run ios -- --simulator="iPhone 15 Pro Max (17.2)"


Para ejecutar la app debemos:
<!-- Para IOS -->
> en el directorio que la contiene ejecuter npm install
> luego cambiar de directorio a /ios con cd ios
> luego instalamos los Pods con "pod install"
> volvemos al directorio de la app y ejecutamos npm run ios -- --simulator="iPhone 15 Pro Max (17.2)"


GITHUB
# IMPORTANTE
ASEGURARSE QUE ESTAN TRAAJANDO EN SU BRANCH
EN VISUAL ESTUDIO CODE DEBEN IR A LA BARRA DE LA IZQUIERDA EN EL TERCER ICONO (BAJANDO) GIT
LUEGO EN LOS TRES PUNTOS EN LAS OPCIONES DONDE ESTA "SOURCE"
CLICK EN "FETCH" Y LUEGO EN LOS MISMOS TRES PUNTOS -> PULL, PUSH -> SYNC
CLICK ABAJO DONDE DICE MAIN (ESE ES EL NOMBRE DEL BRANCH), LUEGO SELECCIONAR LA BRANCH QUE LES CORRESPONDA

ENTONCES VERÁN EL NOMBRE DE SU BRACH EN LA PARTE DE ABAJO Y TODOS LOS CAMBIOS QUE SUBAN A GIT SE HARÁN EN SU BRACH