'use client';

import {TicketCard} from "@app/ui/TicketCard/TicketCard";
import {rows, smallCols, smallRows} from "@app/ui/utils";
import {ReviewCard} from "@app/ui/ReviewCard/ReviewCard";
import {MovieCard} from "@app/ui/MovieCard/MovieCard";
import cardStyles from "@app/ui/Card/Card.module.css";
import {Title} from "@app/ui/Title/Title";
import {Paragraph} from "@app/ui/Paragraph/Paragraph";
import {Accordion} from "@app/ui/Accordion/Accordion";
import {useState} from "react";
import {Dialog} from "@app/ui/Dialog/Dialog";
import {Button} from "@app/ui/Button/Button";

export default function Components() {
    const [openModal, setOpenModal] = useState(false);

    const onDeleteButtonClick = () => {
        setOpenModal(true);
    };

    const closeNodal = () => setOpenModal(false);
    return (
        <>
            <Dialog
                open={openModal}
                onClose={closeNodal}
                title="Удаление билета"
                text="Вы уверены, что хотите удалить билет?"
                footer={() => (
                    <div className={smallCols}>
                        <Button onClick={closeNodal} primary>Да</Button>
                        <Button onClick={closeNodal}>Нет</Button>
                    </div>
                )}
            />
            <div className={rows}>
                <MovieCard
                    imageUrl="/poster.png"
                    title="Властелин колец: Братство кольца"
                    genre="Фэнтези"
                    releaseYear={2001}
                    rating={8}
                    director="Питер Джексон"
                    description="Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу. Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил."
                    count={5}
                    onAddClick={() => {
                    }}
                    onSubtractClick={() => {
                    }}
                />
                <TicketCard
                    id={'1'}
                    imageUrl="/poster.png"
                    title="Властелин колец: Братство кольца"
                    genre="Фэнтези"
                    count={5}
                    onAddClick={() => {
                    }}
                    onSubtractClick={() => {
                    }}
                    onDeleteButtonClick={onDeleteButtonClick}
                />
                <ReviewCard
                    name="Роман"
                    description="По счастью мне довелось посмотреть фильм раньше, чем прочесть книгу. Это было около четырех лет назад, но тот момент я вспоминаю и по сей день. До него я не был фанатом Джона Толкина, как впрочем, и всего фентези в целом, однако стоило мне посмотреть первые десять минут фильма и оставшиеся пролетели на одном дыхании. Я словно погрузился в необычайный мир, где добро борется со злом, где зеленые рощи перемежаются с поросшими мхом статуями и древними развалинами, в мир, где пробираясь лесною тропой можно встретить остроухих неувядающих эльфов или мерзких орков – кому как повезет..."
                    rating={8}
                />
                <div className={cardStyles['card']}>
                    <Title>О нас</Title>
                    <Paragraph>Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы,
                        купить
                        билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки,
                        написать рецензии и дополнить описание фильмов.</Paragraph>
                    <Paragraph>был запущен в 2003 году. Портал предоставляет пользователям информацию о фильмах и их
                        создателях,
                        новости кино, интервью с актерами и другими знаменитостями, рецензии пользователей, расписание
                        сеансов в кинотеатрах, ТВ-программу и другие разделы.</Paragraph>
                    <Paragraph>Сайт был создан 7 ноября 2003 года, его основатели — Виталий Таций и Дмитрий Суханов.
                        Владельцем
                        проекта являлась компания ООО «Билетопоиск», которой принадлежало 60 % акций проекта, 40 % акций
                        принадлежало её совладельцу — французской компании ООО AlloCiné. 15 октября 2013 года сервис
                        купила компания «Яндекс» (размер сделки — $80 млн, около 2,6 млрд рублей на то
                        время).</Paragraph>
                </div>
                <div className={cardStyles['card']}>
                    <Title>Вопросы-ответы</Title>
                </div>
                <div className={smallRows}>
                    <Accordion
                        title="Что такое Билетопоиск?"
                        text="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."
                    />
                    <Accordion
                        title="Что такое Билетопоиск?"
                        text="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."
                    />
                </div>
            </div>
        </>
    )
}
