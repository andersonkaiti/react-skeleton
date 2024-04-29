import { getUser, type UserType } from "../../services/service";

export default async function User() {
    const profile: UserType = await getUser();

    return (
        <>
            {profile && (
                <div>
                    <h3>{profile.username}</h3>
                    <p>{profile.email}</p>
                    <a href={profile.website}>{profile.website}</a>
                </div>
            )}
        </>
    )
}