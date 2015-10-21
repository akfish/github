/// UNFINISHED


// Type definitions for Github.js
// Project: http://www.githubjs.org/
// Definitions by: Ændrew Rininsland <http://www.github.com/aendrew>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module github {
    function constructor(options: ByOauth);
    function constructor(options: ByUserPass);

    interface CommonOptions {
      auth: string;
      apiUrl?: string;
    }

    interface ByOauth extends CommonOptions {
      token: string;
    }

    interface ByUserPass extends CommonOptions {
      username: string;
      password: string;
    }

    interface GithubRepo {

    }

    interface GithubUser {

    }

    interface GithubGist {

    }

    class GithubIssues {
      list: (options, cb: ) => void;
    }

    function getRepo (username: string, reponame: string): GithubRepo;
    function getUser (): GithubUser;
    function getGist (gistID: number): GithubGist;
    function getIssues (username: string, reponame: string): GithubIssues;



}

declare module 'github' {
    export = github;
}
