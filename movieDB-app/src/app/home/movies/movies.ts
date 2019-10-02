export class Movies {
    constructor(
        public popularity: number,
        public vote_count: number,
        public video: boolean,
        public poster_path: string,
        public id: number,
        public backdrop_path: string,
        public original_language: string,
        public original_title: string,
        public title: string,
        public vote_average: number,
        public overview: string,
    ){}
}