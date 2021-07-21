import React, { useEffect } from "react";
import FormatCard from "./FormatCard";

export default function CardList({deck, setDeck, cards, setCards}){

    //called to ensure that the cards being used in the card list are set to the specified deck's cards
    useEffect(() => {
        const abortController = new AbortController();
        if(deck.cards){
            const importedCards = deck.cards;
            importedCards.sort((cardA, cardB) => cardA.id - cardB.id);
            setCards([...importedCards]);
        }
        return () => abortController.abort();
    }, [deck, setCards]);

    const cardList = cards.map((card, index) => 
        <FormatCard card={card} deck={deck} setDeck={setDeck} />
    )

    return (
        <div>
            <h2>Cards</h2>
            {cardList}
        </div>
    )
}