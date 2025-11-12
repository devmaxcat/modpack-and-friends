# I love minecraft!

Basically this is a github repo that contains all the mods and custom scripts for our modpack.

I basically just assume you use curseforge sorry if you don't but I assume it could still work for you more or less

There's two options to get the latest modpack

## Option 1 (The easy way, or the you haven't joined yet)
Go to the latest release and download the zip, import it into curseforge.

You're done!

Unfortunently you'll lose all of your previous settings and waypoints and stuff which is really annoying.

## Option 2 (Harder, but you don't have to lose data)
If you need to update your modpack, you can either do option 1 and lose data or follow these steps!!!:

### Option 2 setup
1. Install git
2. Make sure you've followed option 1 at least once already and you have a curseforge instance of the modpack
### Option 2, how to update
3. cd into to the modpack instance folder and type these commands
```
git init
git remote add origin https://github.com/devmaxcat/modpack-and-friends.git --master main
git pull
```
4. Congrats you did it!
