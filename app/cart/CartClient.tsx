'use client';

import {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {selectedTicketIds} from "../../redux/features/cart/selector";
import {rows, smallCols} from "@app/ui/utils";
import {Dialog} from "@app/ui/Dialog/Dialog";
import {Button} from "@app/ui/Button/Button";
import {cartActions} from "../../redux/features/cart";
import {TicketCard} from "@app/ui/TicketCard/TicketCard";
import {genreTranslations} from "@app/helpers/translations";
import {TotalCard} from "@app/ui/TotalCard/TotalCard";
import {Movie} from "@app/api/types";

type Props = {
    movies: Movie[];
}

export const CartClient: FC<Props> = ({movies}) => {
    const dispatch = useDispatch<AppDispatch>();
    const ticketIds = useSelector((state: RootState) =>
        selectedTicketIds(state)
    )

    movies = movies.filter(movie => ticketIds.includes(movie.id))
    const [openModal, setOpenModal] = useState('');

    const onDeleteButtonClick = (id: string) => {
        setOpenModal(id);
    };
    const closeModal = () => setOpenModal('');

    return (
        <div className={rows}>
            <Dialog
                open={!!openModal}
                onClose={closeModal}
                title="Удаление билета"
                text="Вы уверены, что хотите удалить билет?"
                footer={() => (
                    <div className={smallCols}>
                        <Button onClick={() => {
                            closeModal();
                            dispatch(cartActions.reset(openModal));
                        }} primary>Да</Button>
                        <Button onClick={closeModal}>Нет</Button>
                    </div>
                )}
            />
            {movies.length? <>{
                movies.map((it) =>
                    <TicketCard
                        id={it.id}
                        key={it.id}
                        imageUrl={it.posterUrl}
                        title={it.title}
                        genre={genreTranslations[it.genre]}
                        onDeleteButtonClick={onDeleteButtonClick}
                    />
                )}  <TotalCard />
            </>: 'Корзина пуста...'}
        </div>
    )
}
