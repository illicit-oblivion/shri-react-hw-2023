import {FC} from "react";
import {Review} from "@app/api/types";
import {ReviewCard} from "@app/ui/ReviewCard/ReviewCard";

type Props = {
    promise: Promise<Review[]>
}

export const ReviewsList: FC<Props> = async ({promise}) => {
    const reviews = await promise;

    return (
        <>
            {reviews.map(it =>
                <ReviewCard
                    key={it.id}
                    name={it.name}
                    description={it.text}
                    rating={it.rating}
                />
            )}
        </>
    );
}
