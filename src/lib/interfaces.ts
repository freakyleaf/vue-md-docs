export interface IMarkdownAttributes {
  dateCreated: string;
  dateModified?: string;
  dateReleased?: string;
  title: string;
}

export interface IReleaseNotes {
  [version: string]: string;
}
