package main

import (
    f "fmt"
    "log"
    "flag"
    "regexp"
)


const UsernameRegex string = `^@?(\w){1,15}$`

func main() {

    var usernameInput string;
    flag.StringVar(&usernameInput, "User", "Ali", "The username to check")
    flag.Parse();

    f.Println("SwiperGram username validation checker");
    f.Printf("Checking for valid username, \n ... \n  '%s' resulted in %t ", usernameInput, CheckUsernameSyntax(usernameInput))

}


func CheckUsernameSyntax(username string) bool {
    validationResult := false
    r, err := regexp.Compile(UsernameRegex);
    if err != nil {
        log.Fatal(err);
    };

    validationResult = r.MatchString(username);
    return validationResult ;
}
