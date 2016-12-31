
![Battle Sheep](http://geekdad.com/wp-content/uploads/2015/06/BattleSheep-featured.jpg)

# Copyright:
* I do not own this game. Nor do I intend to advertise as such. This game was created by Blue Orange Games. Link to store: [Battle Sheep](http://www.blueorangegames.com/index.php/games/battle-sheep)

## Rules
* Player 1 places their first land piece anywhere onto the grid.
* Players then take turn placing their land pieces down until no pieces are remaining.
* Land pieces MUST remain connected by at least one side. The board may contain holes in it.
* Players then are given 16 sheep tiles to place on top of the newly constructed board.
* Players first place a sheep somewhere on the edge of the game board.
* Players then place another sheep tile extending in any direction as far as they can go, either until they hit the edge of the board or another sheep, from any existing sheep tiles of theirs.
* Play continues like this until all players are unable to move anywhere on the board anymore.
* Players then count the number of hexagons their sheep are covering and that is their total score.
* The player with the highest score wins!

## Tech used:
* HTML5
  - Used for the basic structure of the page
* HTML5 Drag and Drop
  - This allowed elements to be moved from one area to another and stay
* CSS3
  - Used to style and position the elements on the page
* Javascript
  - Used for handling the majority of dynamic actions on the page
* jQuery 2.1.4
  - Used for areas that I didn't want to type the entire javascript required

## Approach

* The first aspect I tackled was a basic layout to ensure I knew that elements were being moved from one area to another when they were dropped.
* After that, I looked at the drag and drop capability that is crucial to make the game work. I stumbled across a jQuery library called Interact.js that looked promising, but instead just made drag and drop more confusing.
* Having figured out drag and drop at a basic level (to allow the board pieces to be placed), I looked at it in more detail and how to layer another grid on top of the existing one that would accept elements to be dropped into it.
* Once that was figured out, I moved on to writing more efficient code, score tracking, displaying rules and scores, and last - final styling to make sure everything looked good.

## Future features/issue tracker
* I would have liked to find a way to track the players' scores and then automatically declare a winner, however, without having to manually look at the scores to decide. This may still be possible since I am tracking points per player, need to write a function to declare winner after certain events occur.
* Current version does not play like original due to inability to stack tokens and split the stacks. Will look into for later versions.
* Mobile version/mobile interactivity UPDATE: transitioned to flexbox - game currently responds somewhat better to mobile devices, however still cannot react to touch events.
* Touch events not working currently - rewrite touch event functions.
* I'm sure there's a better way to listen for certain elements to change and react based on those changes, but am unsure of those methods.
* Grid for placing pieces is terrible. Need to find a way to allow first player to place a piece anywhere within playing area and build the grid around the played piece - allowing the board to grow organically instead of in such a monotonous way as I have currently laid it out.

## Resources

*  [Game Idea and Assets](http://www.blueorangegames.com/index.php/games/battle-sheep)
* [MDN - Drap and Drop](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
* So many developers who came before me to figure out drag and drop :) Thanks guys!!!
