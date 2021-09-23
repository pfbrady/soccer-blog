
export enum PostTag {
    Game = "On-field performance and happenings",
    Transfer = "Transfer news, recent signings, scouted players, etc",
    Economic = "Financial information, contract details, sponsorship updates",
    Casual = "Anything non-sporting related :)"
} /** plans to add more tags */

export interface Post {
    ID: number
    title: string
    author: string
    date: Date
    tags: PostTag[]
    article: string
    articlePreview: string
}

