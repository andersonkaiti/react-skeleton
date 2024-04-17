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

export class Service {
    private constructor() {}

    static async getArticles(): Promise<ArticleType[]> {
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        return await res.json();
    }
    
    static async getUser(): Promise<UserType> {
        await new Promise(resolve => setTimeout(resolve, 5000));

        const res = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
        const { username, email, website } = await res.json();
        return {
            username,
            email,
            website,
        }
    }
}