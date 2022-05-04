import css from './header.module.css'

export function Header(props) {
    return (
        <header className={css.header}>
            <h1 className={css.title}>Столовая</h1>
        </header>
    );
}