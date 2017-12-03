import { Story } from '../anthologies/story.model';

export class Book {
  constructor (public title: string, public author: string,
    public publisher: string, public year: number, public pages: number,
    public series: string, public seriesnum: number, public stories: Story[],
    public isbn: string, public review: string) {}
}
