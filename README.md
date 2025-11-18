# I love minecraft!

Basically this is a github repo that contains all the mods and custom scripts for our modpack.

I basically just assume you use curseforge sorry if you don't but I assume it could still work for you more or less



## Setup
Go to the [latest release](https://github.com/devmaxcat/modpack-and-friends/releases/latest) and download the zip, import it into curseforge.

You're done! You can stop here. 
Anytime the modpack updates, repeat the steps above. Unfortunently you'll lose all of your previous settings and waypoints and stuff which is really annoying, if you dare continue futher....
If you need to update your modpack, you can either do option 1 and lose data or follow these steps!

1. Make sure to [install git](https://git-scm.com/install/)
3. Go into to the modpack instance folder, open a command prompt, and type these commands:
```
cd C:/Users/<user>/curseforge/Instances/<modpack instance folder name>
```
```
git init -b main
```
```
git remote add origin https://github.com/devmaxcat/modpack-and-friends.git --master main
```
```
git fetch origin
```
```
git reset --hard origin/main
```
```
git clean -df --dry-run
```
MAKE SURE THE LIST DOES NOT SHOW IT WILL DELETE ANYTHING PERSONAL TO YOU, LIKE SCHEMATICS, WAYPOINTS, ETC, IT SHOULD ONLY DELETE MODS AND SCRIPTS
```
git clean -df
```
```
git pull -u origin/main
```
4. From there, anytime the modpack updates, you can just cd into the modpack instance folder again, open a command prompt, and type
```
git pull
```
This will stop you from losing your data! Yay!
