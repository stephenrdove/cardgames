def _separate_card(card):
    if len(card) not in [2,3]:
        return "error" # Raise an exception here
    value, suit = card[:-1], card[-1]
    return value, suit

def sort_value(card):
    value, suit = _separate_card(card)
    suit_map = {"H": 0, "C": 1, "D": 2, "S": 3}
    sort_value = int(value) + (13*suit_map[suit])
    return sort_value

def _display_value(card):
    value, _ = _separate_card(card)
    value_map = {11: "J", 12: "Q", 13: "K", 14: "A", 1: "A", 0: "Joker"}
    if value in value_map:
        display_value = value_map[value]
    else: # If 2 - 9
        display_value = str(value)
    return display_value

def value(card):
    value, _ = _separate_card(card)
    return int(value)

def suit(card):
    _, suit = _separate_card(card)
    return suit

def color(card):
    _, suit = _separate_card(card)
    color_map = {"H": "R", "D": "R", "C": "B", "S": "B"}
    suit in color_map
    return color_map[suit] 

def __str__(card):
    _, suit = _separate_card(card)
    suit_symbols = {"H": '\u2665', "C": '\u2663', "D": '\u2666', "S": '\u2660'}
    return _display_value(card) + suit_symbols[suit]