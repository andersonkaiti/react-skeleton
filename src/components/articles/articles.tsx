import { getArticles, type ArticleType } from "../../services/service";

export default async function Articles() {
    const data: ArticleType[] = await getArticles();
    
    return (
        <>
            {data?.map(article => (
                <div key={article.id}>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                </div>
            ))}
        </>
    )
}