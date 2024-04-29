export type ArticleType = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type UserType = {
    username: string;
    email: string;
    website: string;
}

export async function getArticles(): Promise<ArticleType[]> {
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        cache: "no-store"
    });
    return await res.json() as ArticleType[];
}

export async function getUser(): Promise<UserType> {
    await new Promise(resolve => setTimeout(resolve, 5000));

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/1`, {
        cache: "no-store"
    });
    const { username, email, website } = await res.json();
    return {
        username,
        email,
        website,
    } as UserType;
}