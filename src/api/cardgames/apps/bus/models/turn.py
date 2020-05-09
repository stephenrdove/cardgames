from ...cards.models import card 

def which_prompt(streak):
    if streak == 0:
        turn_dict = {'prompt': 'Red or Black?', 'options': ['R', 'B']}
    if streak == 1:
        turn_dict = {'prompt': 'Higher or Lower?', 'options': ['H', 'L', 'P']}
    if streak == 2:
        turn_dict = {'prompt': 'Inside or Outside?', 'options': ['I', 'O', 'P']}
    if streak == 3:
        turn_dict = {'prompt': 'Which Suit? (Hint: Always Clubs)', 
                    'options': ['H', 'D', 'C', 'S']}
    return turn_dict

def which_guess(streak):
    guess_funcs = [guess_color, guess_high_low, guess_in_out, guess_suit]
    return guess_funcs[streak]

def guess_color(guess):
    return lambda hand, new_card: card.color(new_card) == guess

def guess_high_low(guess):
    func_map = {
        'H': lambda hand, new_card: card.value(new_card) > card.value(hand[0]),
        'L': lambda hand, new_card: card.value(new_card) < card.value(hand[0]),
        'P': lambda hand, new_card: card.value(new_card) == card.value(hand[0])
    }
    return func_map[guess]

def guess_in_out(guess):
    func_map = {
        'O': lambda hand, new_card: 
                card.value(new_card) < card.value(hand[0]) or card.value(new_card) > card.value(hand[1]),
        'I': lambda hand, new_card: 
                card.value(new_card) > card.value(hand[0]) and card.value(new_card) < card.value(hand[1]),
        'P': lambda hand, new_card: 
                card.value(new_card) in [card.value(c) for c in hand] 
    }
    return func_map[guess]

def guess_suit(guess):
    return lambda hand,new_card: card.suit(new_card) == guess
