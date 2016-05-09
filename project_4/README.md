# Project PSIcoh

### A 2D Platformer/Shooter game built in Unity
While at a programming bootcamp, I found myself building games as my projects throughout the bootcamp. So for my final project, I decided to work on a full fledged video game using Unity. I started working in Unity and taught myself C# in order to program the various scripts in the game.

### Tech Used:
- Unity
- C#
- Ferr2D Terrain Builder (Unity extension/tool)

### Currently Unfinished Work:
Player:
- Animations still need lots of love. Currently, animations are still a little wonky.
- Player ability to shoot in different directions (diagonal up, diagonal down, straight down, straight up).
- Camera movement as the player moves or looks around.

Enemy:
- When player is not within trigger area, enemy should patrol back and forth within an area.
- Aim and fire bullets at player while player is within trigger area.
- On being killed: wait a few seconds, fade sprite out, and then destroy gameObject.
- Enemy currently stops firing when player stops moving despite being within trigger area.

General:
- Title Screen with difficulty selector
- Title Screen with number of players selector

Stretch/Long-Term Goals:
- Add different scenes/levels to be transitioned between when player beats a level
- Multiplayer networking for up to 4 player co-op
- Commission artist for unique art assets
