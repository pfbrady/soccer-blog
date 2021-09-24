
export enum PostTag {
    Game = "On-field performance and happenings",
    Health = "Injury-related news",
    Training = "Anything related to training sessions/workouts",
    Transfer = "Transfer news, recent signings, scouted players, etc",
    Economic = "Financial information, contract details, sponsorship updates",
    Casual = "Anything non-sporting related :)",
    League = "Updates from around the rest of the league"
} /** plans to add more tags */

export interface Post {
    id: number
    title: string
    author: string
    date: string
    tags: string
    article: string
    articlePreview: string
}

