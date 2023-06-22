'use client';

import {TicketCard} from "@app/ui/TicketCard/TicketCard";
import {rows} from "@app/ui/utils";
import {ReviewCard} from "@app/ui/ReviewCard/ReviewCard";

export default function Components() {
    return (
        <div className={rows}>
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
            <ReviewCard
                name="Роман"
                description="По счастью мне довелось посмотреть фильм раньше, чем прочесть книгу. Это было около четырех лет назад, но тот момент я вспоминаю и по сей день. До него я не был фанатом Джона Толкина, как впрочем, и всего фентези в целом, однако стоило мне посмотреть первые десять минут фильма и оставшиеся пролетели на одном дыхании. Я словно погрузился в необычайный мир, где добро борется со злом, где зеленые рощи перемежаются с поросшими мхом статуями и древними развалинами, в мир, где пробираясь лесною тропой можно встретить остроухих неувядающих эльфов или мерзких орков – кому как повезет..."
                rating={8}
            />
        </div>
    )
}
