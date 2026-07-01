export default function Post({ post }) {
    const { title, body } = post;
    return (
        <div className="card">
            <h3 className="card-title">{title}</h3>
            <p className="card-body">{body}</p>
        </div>
    )
}