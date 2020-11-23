Project 1 - Simple Shell

- Code C on linnux
1. Why we should use group execpy() function
    fork() --> create process child parent child
2. History feature
    Save History
    ! 
    !!
3. Redirecting Input and output
    --- You must write by seft
    '>' '<' '>>'
4. Communication via a pages
    - ls | grep "abc"
    



- Kernel?
- What is simple Shell? Shell interface?
    Shell is a user interface for access to an operating system's services.  
    There are two way to connect with operating system : 
        Operating system shells use either a command-line interface(CLI) or graphic user interface(GUI).
    It is named a shell because it is the outermost layer around the OS.
    Systax 
    Bash 

    UNIX: fork(), exec(), wait(), dup2(), and pipe() system 

<!-- I. Overview -->
    - CLI 
    - parent process --> child process 
    - Accomplish: ampersand(&) at the end of the command
        osh>cat prog.c &
    - We have a model for you: in pages 2
    - This project is organized in several parts:
        1. Creating the child process and executing the command in the child
        2. Providing a history feature
        3. Adding support of input and output redirection
        4. Allowing parent process and child process to communicate via a pipe
<!-- II. Executing command in a Child Process -->
    - main()  --> a child process is forked and executes 
    - You should create an array of character strings 
    - prototype:         execvp(char* command, char* params[])
        Commmand: 
        Params: parameter

<!-- III. Creating a history feature -->
    - Shell interface program --> A history feature
    - User entering !! at the prompt to execute that command again.
    - If there is no recent command in history, entering !! --> should result in a message "No command in history"

<!-- IV. Redirecting Input and output -->
    - Shell modified to support '>' and '<' redirection oparators. 
        '>' output command to a file 
        '<' input command from a file
    Example: osh> ls >out.txt 
             osh> sort '<'in.txt
    
    - Using dup2() function :  dup2(fd, STDOUT FILEON)
        duplicates fd to standard output 

<!-- V. Communication via a pipe -->
    - Output of one command to serve as input to anorther using a pipe.
        Example: osh> ls -1 \ less
        ls - 1 --> less 
    - Using pipe() function : 




















