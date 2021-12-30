
/* CORNERS */

.stat .corner:last-child {
    display: flex;
    justify-content: flex-end;
}

.stat .corner button:hover {
    color: var(--clr-primary);
}


/* FILTER BUTTONS */

.stat .filter {
    display: flex;
    justify-content: space-between;
    font-weight: var(--fw-bold);
}

.stat .filter *:hover {
    color: var(--clr-primary);
}

.stat .filter .on {
    color: var(--clr-blue);
}


/* FOOTER */

footer {
    margin: 4rem 0;
    text-align: center;
    color: var(--clr-gb-5);
}


/* JAVASCRIPT FUNCTIONS - STYLES */


/* FILTER TODOS */

.todos.active .card.checked,
.todos.completed .card {
    transition: 0.4s;
    opacity: 0;
    padding: 0;
    border: 0;
    height: 0;
    pointer-events: none;
}

.todos.completed .card.checked {
    opacity: 1;
    padding: 1.9rem 2rem;
    height: auto;
    display: flex;
    pointer-events: all;
    transition: 0.4s;
}

.todos.completed>.card.checked~.card.checked {
    border-top: 0.2rem solid var(--clr-gb-6);
}


/* FALL ANIMATION */

.todos .card.fall {
    pointer-events: none;
    animation: fall 0.2s forwards ease;
}

@keyframes fall {
    0% {
        opacity: 0.5;
        transform: translateX(20%);
    }
    50% {
        transform: translateX(25%) rotateZ(40deg);
        opacity: 0.3;
    }
    100% {
        transform: translateX(30%) rotateZ(90deg);
        opacity: 0;
    }
}


/* DRAG AND DROP */

.todos .card.dragging {
    opacity: 0.5;
}

@media (max-width: 599px) {
    .stat {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 5rem 2rem;
    }
    .stat .filter {
        grid-row: 2/3;
        grid-column: 1/3;
        justify-content: space-around;
        position: relative;
    }
    .stat .filter::before {
        content: "";
        position: absolute;
        width: calc(100% + 4rem);
        height: 1rem;
        background-color: var(--clr-page-bg);
        top: -3rem;
    }
}

@media (max-width: 340px) {
    header.card {
        align-items: center;
    }
    header.card h1 {
        font-size: calc(var(--base-font) * 1.5);
    }
}
