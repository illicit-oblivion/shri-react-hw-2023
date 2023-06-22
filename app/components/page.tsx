'use client';

import {TicketCard} from "@app/components/TicketCard/TicketCard";

export default function Components() {
    return (
        <div style={{padding: '20px'}}>
            <TicketCard
                imageUrl="/poster.png"
                title="Властелин колец: Братство кольца"
                description="Фэнтези"
                count={5}
                onAddClick={() => {
                }}
                onSubtractClick={() => {
                }}
            />
        </div>
    )
}
