# Project PSIcoh

### A 2D Platformer/Shooter game built in Unity
While at a programming bootcamp, I found myself building games as my projects throughout the bootcamp. So for my final project, I decided to work on a full fledged video game using Unity. I started working in Unity and taught myself C# in order to program the various scripts in the game.

### Tech Used:
- Unity
- C#
- Ferr2D Terrain Builder (Unity extension/tool)

### Currently Unfinished Work:
See issues for a more complete list

Player:
- Animations still need lots of love. Currently, animations are still a little wonky.
- Player ability to shoot in different directions (diagonal up, diagonal down, straight down, straight up).
- Camera movement as the player moves or looks around. (Hold down while standing still will pan camera down slowly)
- Give player life points? I kinda like the hardcore 'one shot and you die' aspect, but I think there are probably better ways accomplish that hardcore mode.

Enemy:
- When player is not within trigger area, enemy should patrol back and forth within an area.
- Aim and fire bullets at player while player is within trigger area.
- On being killed: wait a few seconds, fade sprite out, and then destroy gameObject.
- Give enemy life points instead of just destroying the enemy when a single player projectile collides with enemy.

General:
- Title Screen with difficulty selector
- Title Screen with number of players selector
- Thematic ground floor that kills player when touched (water, lava)

Stretch/Long-Term Goals:
- Add different scenes/levels to be transitioned between when player beats a level
- Multiplayer networking for up to 4 player co-op
- Split screen for 2 players (?)
- Commission artist for unique art assets

Interesting possible ideas?
- Macro game/ Endless levels?
  - Player starts a game on normal, enemies fire slower/have less health, player has lots of health, beating levels progresses a macro game a small amount.
  - Player starts on Hardcore, enemies have lots of health, fire faster, player has less health, beating levels progresses macro game a large amount.
  - If I create procedurally levels, players could continue playing for a long time as well as contribute to the gains of other players to defeat an overarching enemy?
  - What happens when Macro game is beaten? Huge endgame boss fight networked with 100s of ppl fighting?
