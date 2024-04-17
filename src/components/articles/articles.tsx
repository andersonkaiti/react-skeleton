import { Service, type ArticleType } from "../services/service";

export default async function Articles() {
    const data: ArticleType[] = await Service.getArticles();
    
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