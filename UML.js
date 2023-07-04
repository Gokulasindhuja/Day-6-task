class Movie {
    private title: string;
    private studio: string;
    private rating: string;
  
    constructor(title: string, studio: string, rating: string = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    public getTitle(): string {
      return this.title;
    }
  
    public setTitle(title: string): void {
      this.title = title;
    }
  
    public getStudio(): string {
      return this.studio;
    }
  
    public setStudio(studio: string): void {
      this.studio = studio;
    }
  
    public getRating(): string {
      return this.rating;
    }
  
    public setRating(rating: string): void {
      this.rating = rating;
    }
  
    public static getPG(movies: Movie[]): Movie[] {
      return movies.filter(movie => movie.rating === "PG");
    }
  }