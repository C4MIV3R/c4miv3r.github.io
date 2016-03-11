
![Battle Sheep](http://geekdad.com/wp-content/uploads/2015/06/BattleSheep-featured.jpg)
___

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

## Technology used:
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

## Unsolved Issues
* I would have liked to find a way to track the players' scores and then automatically declare a winner, however, without having to manually look at the scores to decide. This may still be possible since I am tracking points per player, but am unsure of how to proceed.
* Current version does not play like original due to inability to stack tokens and split the stacks. Will look into for later versions.
* I also would like to make this game playable on mobile, but am at a complete loss as to how ensure interactivity on mobile
* I'm sure there's a better way to listen for certain elements to change and react based on those changes, but am unsure of those methods.
* The grid for placing the land pieces is also less detailed than I would have liked. I believe there is a better way to create the first grid that would allow for a more detailed positioning of pieces.

## Resources

*  [Game Idea and Assets](http://www.blueorangegames.com/index.php/games/battle-sheep)
* [MDN - Drap and Drop](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
