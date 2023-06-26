'use client';

import {rows, smallCols} from "@app/ui/utils";
import {TicketCard} from "@app/ui/TicketCard/TicketCard";
import {genreTranslations} from "@app/helpers/translations";
import {Movie} from "@app/api/types";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {selectedTicketIds} from "../../redux/features/cart/selector";
import {cartActions} from "../../redux/features/cart";
import {Dialog} from "@app/ui/Dialog/Dialog";
import {Button} from "@app/ui/Button/Button";
import {useState} from "react";
import {TotalCard} from "@app/ui/TotalCard/TotalCard";

export default async function Cart() {
    const dispatch = useDispatch<AppDispatch>();
    const ticketIds = useSelector((state: RootState) =>
        selectedTicketIds(state)
    )
    const [openModal, setOpenModal] = useState(false);
    const movies = await getMovies().then(movies => movies.filter(movie => ticketIds.includes(movie.id)));

    const onDeleteButtonClick = () => {
        setOpenModal(true);
    };
    const closeModal = () => setOpenModal(false);

    return (
        <div className={rows}>
            <Dialog
                open={openModal}
                onClose={closeModal}
                title="Удаление билета"
                text="Вы уверены, что хотите удалить билет?"
                footer={() => (
                    <div className={smallCols}>
                        <Button onClick={closeModal} primary>Да</Button>
                        <Button onClick={() => {
                            dispatch(cartActions.reset())
                            closeModal();
                        }}>Нет</Button>
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

async function getMovies(): Promise<Movie[]> {
    const res = await fetch('http://localhost:3001/api/movies')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
