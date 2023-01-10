# Compiled Version and Dev Version for the Project which didn't need a Webserver.

1) Run: 

    ng build --configuration production --aot

    to build the application and after that in the distfolder, remove the type="module" tags in script tags and change the base "/" to "./"

Now yout just doible click on index.html to render the application