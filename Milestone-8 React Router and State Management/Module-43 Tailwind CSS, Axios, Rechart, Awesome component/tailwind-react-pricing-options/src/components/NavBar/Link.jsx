
export const Link = ({ route }) => {
    const { name, path } = route;

    return (
        <li className="hover:bg-amber-300 px-4">
            <a href={path}>{name}</a>
        </li>
    )
}
