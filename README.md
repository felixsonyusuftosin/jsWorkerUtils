# flexloaders
Helper class that improves the the loading process of multiple endpoints on multiple processes 
# Development Guide 
## About 
- This library is meant to be a node packaged module that optimize concurrent api requests and simplify as much as possible , the library should be able  integrate with other javascript projects indepent of frameworks.

## Technology used 
- Mordern Javascripts Es6 syntax will be employed in building this package. 
   * We will be using a strict type version of JS `Typrescript` 
   * Typescript has a .ts extension
   * We will be using a lot of webworkers and other tools as rxjs lib for its functional properties.
   * We will minimize the dependencies of this library to other libraries, so that we can keep it isolated and stable.
## Pull Requests
## Structure 
- A PR template is provided in other to introduce upgrades please ensure you follow the check lists defined in this template. 
- To create any branch please checkout of `develop` branch and name your branch apropriately as defined below. 
- All PRs must be opened against the `develop` branch however. Please request for review of your code from all contributors and once they approve you can merge in the branch and delete
- All commit message must follow the predefined structure. see below for details. please ensure you follow this guide or your PR may not be merged.
## Creating Branches 
- The following structure defines the how the branches will be created on this project We are using Git Flow Please ensure you have this installed on your local machine. If you dont please get it here [Get Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- To start a new **Feature** run `git flow feature start <nameofbranch>` 
- When done and want to merge with your local version of develop run `git flow feature finish feature_branch`
- When you want to create a release that will be merged to with master at a later date, that is when a stable branch has being reached. only documentations and/or bug fixes can go into the release branch. No major updates can be accommodated
run `git flow release start <branchNumber>`
where branch number format is  `0.1.{release branch}`
- To merge release with master run `git checkout master`
- Patch production with a quick fix `git flow hotfix start <branch>`
- To merge hotfix run `git flow hotfix finish <branch>`
### Below is a summary description of the processes described above please consult this documentation before creating branches 
| Action                   |   Command 
| ------------------       | -------------
| Start a new feature      |git flow feature start <nameofbranch> 
|   When done and want to merge with your local version of develop              |git flow feature finish feature_branch
| When you want to create a release |git flow release start <branchNumber>
|  To merge release with master |git checkout master
|  Patch production with a quick fix |git flow hotfix start <branch>
|  To merge hotfix    |git flow hotfix finish <branch>
                        
  ## Commit Structure
    The commit message must follow the predifined structure. 
    Must be reported as a continous sentence in the following stucture as if its an answer to the statement > This commit will ..
    Each commit message must be structured such as it answers the folowing questions 
       What is the purpose of the commit ? 
       What is the relationship between this commit and the previous version of the branch ? 
       What is the status of the job done on this commit  
     Purpose Of Commit + Relationship with previous version +~+ + status
     Example of a commit Message
     git commit -m Provide access to userprovided endpoints to complement the exisiting structure ~ ongoing
  
## Comment Structure 
### file structure 
    All files with similar functionality  must be housed  in the same workspace and a `.readme` provided that describes the following 
         Purpose of the workspace
         Short description of each files and its structure 
         How it ties in to the overall project 
    All files must be preceeded with the following comment structure
         /** @file `description` **/  
## Function Defination 
    All functions must be defined with a preceeding comment 
    /** @method <description> @param{type} <name ></name><description> @return {type} Desciption**/ 
        All param must be documented 
        The use of <any> is strongly discouraged
        All methods must have a test implementation to it

## Constants and Variables 
    For variables that will not change it is recommended they be defined as `const` and for those that will `let` will do 
    * All constants must be defined with all caps 
## Code readability
  