# Card Games
This repository houses card games created using Python/Django backend and NextJS frontend. Currently, the only game that is being worked on is Ride the Bus.

## Ride the Bus
Ride the Bus is a single player card game with a simple goal: make four correct guesses in a row.

### How to Play
To start, we have a full deck of cards. The question asked to the player changes based on their current streak of correct guesses. If the player guesses correctly, the streak is increased by one and the latest card is added to the player's hand. Once the player guesses incorrectly, the streak restarts at 0 and the cards in the player's hand is discarded.

The questions are as follows:
| Streak | # of Cards in Hand | Question |
|---|---|---|
| 0 | 0 | Red or Black? |
| 1 | 1 | Higher or Lower? |
| 2 | 2 | Inside or Outside? |
| 3 | 3 | Which Suit? |
| 4 | 4 | You Win! |

- `Red or Black?` asks which color will the next card be.
- `Higher or Lower?` asks whether the next card will be higher or lower than the current card in the player's hand.
- `Inside or Outside?` asks if the next card will be in between the two current cards in the player's hand or outside.
- `Which Suit?` asks what the suit of the next card will be.

If you have a streak of 4, meaning you correctly answered all 4 questions, you win! Simple, right?! Give it a go and see how easy it is!
